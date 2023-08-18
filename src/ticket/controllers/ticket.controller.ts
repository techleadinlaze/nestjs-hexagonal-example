import { Body, Controller, Get, Logger, Post, Query } from '@nestjs/common';
import { TicketFinder } from '@app/ticket/application/ticket_finder.service';
import { TicketCreator } from '@app/ticket/application/ticket_creator.service';
import { TicketCreateDto } from '../infrastructure/dtos/ticket_create.dto';
import { Ticket } from '../domain/ticket.model';
import { TicketsResponse } from '../application/tickets_response';
import { TicketQueryDto } from '../infrastructure/dtos/ticket_query.dto';

@Controller('ticket')
export class TicketController {
  private readonly logger = new Logger(TicketController.name);

  public constructor(
    private readonly ticketFinder: TicketFinder,
    private readonly ticketCreator: TicketCreator,
  ) {}

  @Get()
  public async findAll(
    @Query() query: TicketQueryDto,
  ): Promise<TicketsResponse> {
    return await this.ticketFinder.run(query);
  }

  @Post()
  public async create(@Body() body: TicketCreateDto): Promise<Ticket> {
    this.logger.debug(body);
    return await this.ticketCreator.run(body);
  }
}
