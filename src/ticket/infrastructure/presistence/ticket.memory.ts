import { Injectable } from '@nestjs/common';
import { Ticket } from '../../domain/ticket.model';
import { TicketRepository } from '../../domain/ticket.repository';
import { TicketId } from 'src/ticket/domain/ticked_id';
import { TicketDescription } from 'src/ticket/domain/ticked_description';
import { TicketStatus } from 'src/ticket/domain/ticked_status';
import { TicketPriority } from 'src/ticket/domain/ticked_priority';

/**
 * This is the implementation of output port, to store things in memory.
 */
@Injectable()
export class TicketInMemory implements TicketRepository {
  private readonly tickets: Ticket[] = [];

  public constructor() {
    const id = TicketId.random();
    const description = new TicketDescription('description');
    const status = new TicketStatus('OPEN');
    const priority = new TicketPriority(2);
    const createdAt = new Date();
    const ticket = new Ticket(id, description, status, priority, createdAt);
    this.tickets.push(ticket);

    const id2 = TicketId.random();
    const description2 = new TicketDescription('description 2');
    const status2 = new TicketStatus('OPEN');
    const priority2 = new TicketPriority(1);
    const createdAt2 = new Date();
    const ticket2 = new Ticket(
      id2,
      description2,
      status2,
      priority2,
      createdAt2,
    );
    this.tickets.push(ticket2);
  }

  public async create(ticket: Ticket): Promise<Ticket> {
    this.tickets.push(ticket);
    return new Promise((resolve) => {
      return resolve(ticket);
    });
  }

  public async findAll(query): Promise<Ticket[]> {
    return new Promise((resolve) => {
      return resolve(this.tickets);
    });
  }

  public async findById(id: TicketId): Promise<Ticket> {
    return new Promise((resolve) => {
      const ticket = this.tickets.find((ticket) => {
        return ticket.id.toString() === id.toString();
      });
      return resolve(ticket);
    });
  }
}
