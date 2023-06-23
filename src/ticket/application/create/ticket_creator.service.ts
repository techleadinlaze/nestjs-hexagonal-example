import { Inject, Injectable } from '@nestjs/common';
import { TicketRepository } from '../../domain/ticket.repository';
import { Ticket } from '../../domain/ticket.model';
import { TicketCreatorRequest } from './ticket_creator_request';
import { TicketId } from '../../domain/ticked_id';
import { TicketDescription } from '../../domain/ticked_description';
import { TicketStatus } from '../../domain/ticked_status';
import { TicketPriority } from '../../domain/ticked_priority';

@Injectable()
export class TicketCreator {
  constructor(
    @Inject(TicketRepository)
    private readonly tickerRepository: TicketRepository,
  ) {}

  async run(request: TicketCreatorRequest): Promise<Ticket> {
    const id = new TicketId(request.id());
    const description = new TicketDescription(request.description());
    const status = new TicketStatus(request.status());
    const priority = new TicketPriority(request.priority());
    const createdAt = request.createdAt();
    const ticket = new Ticket(id, description, status, priority, createdAt);
    await this.tickerRepository.create(ticket);
    return ticket;
  }
}
