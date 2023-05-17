import { Logger, Module } from '@nestjs/common';
import { TicketController } from './controllers/ticket.controller';
import { TicketService } from './application/services/ticket.service';
import { TicketRepository } from './domain/respository/ticket.repository';
import { TicketInMemory } from './infrastructure/driven/ticket.memory';
import { TicketTypeOrm } from './infrastructure/driven/ticket.typeorm';
import TicketsEntity from './infrastructure/entity/ticket.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [Logger, TypeOrmModule.forFeature([TicketsEntity])],
  controllers: [TicketController],
  providers: [
    TicketService,
    {
      provide: TicketRepository,
      useClass: TicketTypeOrm,
    },
  ],
})
export class TicketModule {}
