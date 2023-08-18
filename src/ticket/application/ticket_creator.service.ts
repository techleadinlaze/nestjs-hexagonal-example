import { Inject, Injectable } from '@nestjs/common';
import { TicketRepository } from '@app/ticket/domain/ticket.repository';
import { Ticket } from '@app/ticket/domain/ticket.model';
import { TicketPrimitive } from '@app/ticket/domain/ticket.primitive';

@Injectable()
export class TicketCreator {
  public constructor(
    @Inject(TicketRepository)
    private readonly tickerRepository: TicketRepository,
  ) {}

  public async run(request: TicketPrimitive): Promise<Ticket> {
    const ticket = Ticket.fromPrimitives(request);
    await this.tickerRepository.create(ticket);
    return ticket;
  }
}
