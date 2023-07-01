import { Logger, Module } from '@nestjs/common';
import { TicketController } from './controllers/ticket.controller';
import { TicketRepository } from './domain/ticket.repository';
import { TicketInMemory } from './infrastructure/presistence/ticket.memory';
import { TicketTypeOrm } from './infrastructure/presistence/ticket.typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TicketCreator } from './application/create/ticket_creator.service';
import { TicketFinder } from './application/find/ticket-create.service';

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
