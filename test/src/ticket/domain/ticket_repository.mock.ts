import { Ticket } from '../../../../src/ticket/domain/ticket.model';
import { TicketRepository } from '../../../../src/ticket/domain/ticket.repository';
import { TicketId } from '../../../../src/ticket/domain/ticked_id';
import { TicketDescription } from '../../../../src/ticket/domain/ticked_description';
import { TicketStatus } from '../../../../src/ticket/domain/ticked_status';
import { TicketPriority } from '../../../../src/ticket/domain/ticked_priority';
import { TicketCreatedAt } from '../../../../src/ticket/domain/ticked_created_at';

export class TicketRepositoryMock implements TicketRepository {
  public tickets: Ticket[] = [];

  async findAll(): Promise<Ticket[]> {
    const id = new TicketId('f09ae5e8-0f42-45ea-98b0-c2aa344e4a1a');
    const description = new TicketDescription('description');
    const status = new TicketStatus('CLOSED');
    const priority = new TicketPriority(1);
    const createdAt = new TicketCreatedAt(new Date().toISOString());
    const ticket = new Ticket(id, description, status, priority, createdAt);
    this.tickets = [ticket];

    return Promise.resolve(this.tickets);
  }

  async getEmptyData(): Promise<Ticket[]> {
    return Promise.resolve(this.tickets);
  }

  create(ticket: Ticket): Promise<Ticket> {
    return Promise.resolve(ticket);
  }

  findById(id: TicketId): Promise<Ticket> {
    throw new Error('Method not implemented.');
  }
}
