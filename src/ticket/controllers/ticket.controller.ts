import { Body, Controller, Get, Logger, Post, Query } from '@nestjs/common';
import { TicketService } from '../application/services/ticket.service';

@Controller('ticket')
export class TicketController {
  private readonly logger = new Logger(TicketController.name);

  constructor(private ticketService: TicketService) {}

  @Get()
  async findAll(@Query() query: { limit; offset; search }) {
    return await this.ticketService.findAll(query);
  }

  @Post()
  async create(@Body() body) {
    this.logger.debug(body);
    return await this.ticketService.create(body);
  }
}
