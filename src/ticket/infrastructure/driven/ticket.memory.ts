import { Injectable } from '@nestjs/common';
import { Ticket, TicketStatus } from '../../domain/model/ticket.model';
import { TicketRepository } from '../../domain/respository/ticket.repository';

/**
 * This is the implementation of output port, to store things in memory.
 */
@Injectable()
export class TicketInMemory implements TicketRepository {
  private readonly tickets: Ticket[] = [
    {
      id: 1,
      description: '',
      status: TicketStatus.OPEN,
      priority: 2,
      createdAt: new Date(),
    },
  ];

  create(ticket: Ticket): Promise<Ticket> {
    this.tickets.push(ticket);
    return new Promise((resolve) => {
      return ticket;
    });
  }

  findAll(query): Promise<Ticket[]> {
    return new Promise((resolve) => {
      return this.tickets;
    });
  }
}
