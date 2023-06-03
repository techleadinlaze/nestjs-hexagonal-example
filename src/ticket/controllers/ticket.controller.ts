import { Body, Controller, Get, Logger, Post, Query } from '@nestjs/common';
import { TicketFinder } from '../application/find/ticket-create.service';
import { TicketCreator } from '../application/create/ticket-create.service';

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
  async create(@Body() body) {
    this.logger.debug(body);
    return await this.ticketCreator.run(body);
  }
}
