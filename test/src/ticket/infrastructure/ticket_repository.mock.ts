import { Ticket } from '@app/ticket/domain/ticket.model';
import { TicketRepository } from '@app/ticket/domain/ticket.repository';
import { TicketId } from '@app/ticket/domain/ticked_id';

export class TicketRepositoryMock implements TicketRepository {
  public tickets: Ticket[] = [];

  public async findAll(): Promise<Ticket[]> {
    return Promise.resolve(this.tickets);
  }

  public async getEmptyData(): Promise<Ticket[]> {
    return Promise.resolve(this.tickets);
  }

  public create(ticket: Ticket): Promise<Ticket> {
    return Promise.resolve(ticket);
  }

  public findById(id: TicketId): Promise<Ticket> {
    throw new Error('Method not implemented.');
  }
}
