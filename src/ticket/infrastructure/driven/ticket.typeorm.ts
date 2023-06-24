import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntitySchema, Repository } from 'typeorm';
import { TicketRepository } from 'src/ticket/domain/ticket.repository';
import { TicketsEntity } from '../entities/ticket.entity';
import { Ticket } from 'src/ticket/domain/ticket.model';
import { TicketId } from 'src/ticket/domain/ticked_id';
import { TypeOrmRepository } from 'src/shared/infrastructure/persistence/typeorm.repository';

@Injectable()
export class TicketTypeOrm
  extends TypeOrmRepository<Ticket>
  implements TicketRepository
{
  protected entitySchema(): EntitySchema<Ticket> {
    return TicketsEntity;
  }

  public async findById(id: TicketId): Promise<Ticket | null> {
    const repository = await this.repository();

    const ticket = await repository.createQueryBuilder();
    ticket.where('id = :id', { id: id.toString() });

    return ticket.getOne();
  }

  public async findAll(query: any): Promise<Ticket[]> {
    const search = query.search || '';
    const repository = await this.repository();
    const tickets = await repository.createQueryBuilder();
    if (search) {
      tickets.where('description ILIKE lower(:search)', {
        search: `%${search}%`,
      });
    }
    return await tickets.getMany();
  }

  public async create(ticket: Ticket): Promise<Ticket> {
    try {
      return await this.persist(ticket);
    } catch (error) {
      throw error;
    }
  }
}
