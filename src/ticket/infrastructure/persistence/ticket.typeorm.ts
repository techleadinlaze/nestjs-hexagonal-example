import { Injectable } from '@nestjs/common';
import { EntitySchema } from 'typeorm';
import { TicketRepository } from '@app/ticket/domain/ticket.repository';
import { TicketsEntity } from '@app/ticket/infrastructure/persistence/typeorm/ticket.entity';
import { Ticket } from '@app/ticket/domain/ticket.model';
import { TicketId } from '@app/ticket/domain/ticked_id';
import { TypeOrmRepository } from '@app/shared/infrastructure/persistence/typeorm.repository';

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
    const ticket = repository.createQueryBuilder();
    ticket.where('id = :id', { id: id.toString() });

    return ticket.getOne();
  }

  public async findAll(query: any): Promise<Ticket[]> {
    const search = query.search || '';
    const repository = await this.repository();
    const tickets = repository.createQueryBuilder();
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
