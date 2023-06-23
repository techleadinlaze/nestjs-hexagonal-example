import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TicketRepository } from 'src/ticket/domain/ticket.repository';
import { TicketsEntity } from '../entities/ticket.entity';
import { Ticket } from 'src/ticket/domain/ticket.model';
import { TicketId } from 'src/ticket/domain/ticked_id';

@Injectable()
export class TicketTypeOrm implements TicketRepository {
  constructor(
    @InjectRepository(TicketsEntity)
    private ticketsRepository: Repository<TicketsEntity>,
  ) {}

  findById(id: TicketId): Promise<Ticket> {
    throw new Error('Method not implemented.');
  }

  async findAll(query): Promise<Ticket[]> {
    const search = query.search || '';
    const tickets = this.ticketsRepository.createQueryBuilder();
    if (search) {
      tickets.where('description ILIKE lower(:search)', {
        search: `%${search}%`,
      });
    }
    return await tickets.getMany();
  }

  async create(ticket: Ticket): Promise<any> {
    try {
      const newTicket = new TicketsEntity(ticket);
      await this.ticketsRepository.save(newTicket);
      return newTicket;
    } catch (error) {
      throw error;
    }
  }
}
