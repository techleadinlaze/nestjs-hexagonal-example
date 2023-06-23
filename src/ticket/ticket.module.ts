import { Logger, Module } from '@nestjs/common';
import { TicketController } from './controllers/ticket.controller';
import { TicketRepository } from './domain/ticket.repository';
import { TicketInMemory } from './infrastructure/driven/ticket.memory';
import { TicketTypeOrm } from './infrastructure/driven/ticket.typeorm';
import { TicketsEntity } from './infrastructure/entities/ticket.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TicketCreator } from './application/create/ticket_creator.service';
import { TicketFinder } from './application/find/ticket-create.service';

@Module({
  imports: [Logger, TypeOrmModule.forFeature([TicketsEntity])],
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
