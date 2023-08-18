import { Module } from '@nestjs/common';
import { TicketController } from '@app/ticket/controllers/ticket.controller';
import { TicketRepository } from '@app/ticket/domain/ticket.repository';
import { TicketFinder } from '@app/ticket/application/ticket_finder.service';
import { TicketTypeOrm } from '@app/ticket/infrastructure/persistence/ticket.typeorm';
import { TicketCreator } from './application/ticket_creator.service';

@Module({
  controllers: [TicketController],
  providers: [
    TicketFinder,
    TicketCreator,
    {
      provide: TicketRepository,
      useClass: TicketTypeOrm,
    },
  ],
})
export class TicketModule {}
