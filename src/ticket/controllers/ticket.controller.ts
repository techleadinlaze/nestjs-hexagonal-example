import { Body, Controller, Get, Logger, Post, Query } from '@nestjs/common';
import { TicketFinder } from '@app/ticket/application/find/ticket_finder.service';
import { TicketCreator } from '@app/ticket/application/create/ticket_creator.service';
import { TicketPrimitive } from '../domain/ticket.primitive';

@Controller('ticket')
export class TicketController {
  private readonly logger = new Logger(TicketController.name);

  constructor(
    private ticketFinder: TicketFinder,
    private ticketCreator: TicketCreator,
  ) {}

  @Get()
  async findAll(@Query() query: { limit; offset; search }) {
    return await this.ticketFinder.run(query);
  }

  @Post()
  async create(@Body() body: TicketPrimitive) {
    this.logger.debug(body);
    return await this.ticketCreator.run(body);
  }
}
