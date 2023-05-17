import { Inject, Injectable } from '@nestjs/common';
import { Ticket } from '../../domain/model/ticket.model';
import { TicketRepository } from '../../domain/respository/ticket.repository';

/**
 * The implementation of the inbound port ITicketService.
 */
@Injectable()
export class TicketService {
  constructor(
    @Inject(TicketRepository)
    private readonly tickerRepository: TicketRepository,
  ) {}

  async findAll(query): Promise<Ticket[]> {
    return await this.tickerRepository.findAll(query);
  }

  async create(body): Promise<Ticket> {
    const ticket: Ticket = {
      description: body.description,
      priority: body.priority,
    };
    await this.tickerRepository.create(ticket);
    return ticket;
  }
}
