import { Inject, Injectable } from '@nestjs/common';
import { TicketRepository } from '@app/ticket/domain/ticket.repository';
import { TicketsResponse } from './tickets_response';

/**
 * The implementation of the inbound port ITicketService.
 */
@Injectable()
export class TicketFinder {
  constructor(
    @Inject(TicketRepository)
    private readonly tickerRepository: TicketRepository,
  ) {}

  async run(query): Promise<TicketsResponse> {
    const tickets = await this.tickerRepository.findAll(query);
    return new TicketsResponse(tickets, true, 'ok');
  }
}
