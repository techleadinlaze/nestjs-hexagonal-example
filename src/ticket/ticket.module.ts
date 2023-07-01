import { Logger, Module } from '@nestjs/common';
import { TicketController } from './controllers/ticket.controller';
import { TicketRepository } from './domain/ticket.repository';
import { TicketTypeOrm } from './infrastructure/presistence/ticket.typeorm';
import { TicketCreator } from './application/create/ticket_creator.service';
import { TicketFinder } from './application/find/ticket_finder.service';

@Module({
  imports: [Logger],
  controllers: [TicketController],
  providers: [
    TicketFinder,
    {
      provide: TicketRepository,
      useClass: TicketTypeOrm,
    },
    TicketCreator,
    {
      provide: TicketRepository,
      useClass: TicketTypeOrm,
    },
  ],
})
export class TicketModule {}
