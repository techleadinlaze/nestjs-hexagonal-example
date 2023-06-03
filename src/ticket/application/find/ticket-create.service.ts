import { Inject, Injectable } from '@nestjs/common';
import { Ticket } from '../../domain/ticket.model';
import { TicketRepository } from '../../domain/ticket.repository';

/**
 * The implementation of the inbound port ITicketService.
 */
@Injectable()
export class TicketFinder {
  constructor(
    @Inject(TicketRepository)
    private readonly tickerRepository: TicketRepository,
  ) {}

  async run(query): Promise<Ticket[]> {
    return await this.tickerRepository.findAll(query);
  }
}
