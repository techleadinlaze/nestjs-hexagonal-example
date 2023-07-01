import { Test, TestingModule } from '@nestjs/testing';
import { Ticket } from '../../domain/ticket.model';
import { TicketRepository } from '../../domain/ticket.repository';
import { TicketId } from '../../domain/ticked_id';
import { TicketDescription } from '../../domain/ticked_description';
import { TicketStatus } from '../../domain/ticked_status';
import { TicketPriority } from '../../domain/ticked_priority';
import { TicketCreatedAt } from '../../domain/ticked_created_at';
import { TicketPrimitive } from '../../domain/ticket.primitive';
import { TicketFinder } from './ticket_finder.service';
import { TicketsResponse } from './tickets_response';
import { HttpResponse } from 'src/shared/domain/http_response';

describe('TicketFinder', () => {
  let service: TicketFinder;
  let tickets: Ticket[];

  beforeEach(async () => {
    const id = new TicketId('f09ae5e8-0f42-45ea-98b0-c2aa344e4a1a');
    const description = new TicketDescription('description');
    const status = new TicketStatus('CLOSED');
    const priority = new TicketPriority(1);
    const createdAt = new TicketCreatedAt(new Date().toISOString());
    const ticket = new Ticket(id, description, status, priority, createdAt);
    tickets = [ticket];

    const TicketRepositoryProvider = {
      provide: TicketRepository,
      useFactory: () => ({
        findAll: jest.fn(() => tickets),
      }),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [TicketFinder, TicketRepositoryProvider],
    }).compile();

    service = module.get<TicketFinder>(TicketFinder);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('it should return a success ticket', async () => {
    const response = new TicketsResponse(tickets, true, 'ok');
    expect((await service.run({})).data).toEqual(response.data);
  });
});
