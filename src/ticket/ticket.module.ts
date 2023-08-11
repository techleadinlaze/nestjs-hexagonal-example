import { Module } from '@nestjs/common';
import { TicketController } from '@app/ticket/controllers/ticket.controller';
import { TicketRepository } from '@app/ticket/domain/ticket.repository';
import { TicketCreator } from '@app/ticket/application/create/ticket_creator.service';
import { TicketFinder } from '@app/ticket/application/find/ticket_finder.service';
import { TicketTypeOrm } from '@app/ticket/infrastructure/persistence/ticket.typeorm';
import { TicketInMemory } from '@app/ticket/infrastructure/persistence/ticket.memory';

@Module({
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
