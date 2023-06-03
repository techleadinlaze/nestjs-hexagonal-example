import { Inject, Injectable } from '@nestjs/common';
import { Ticket } from '../../domain/ticket.model';
import { TicketRepository } from '../../domain/ticket.repository';

/**
 * The implementation of the inbound port ITicketService.
 */
@Injectable()
export class TicketCreator {
  constructor(
    @Inject(TicketRepository)
    private readonly tickerRepository: TicketRepository,
  ) {}

  async run(body): Promise<Ticket> {
    const ticket: Ticket = {
      description: body.description,
      priority: body.priority,
    };
    await this.tickerRepository.create(ticket);
    return ticket;
  }
}
