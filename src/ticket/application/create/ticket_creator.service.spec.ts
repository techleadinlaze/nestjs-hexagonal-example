import { Test, TestingModule } from '@nestjs/testing';
import { TicketCreator } from './ticket_creator.service';
import { Ticket } from '../../domain/ticket.model';
import { TicketRepository } from '../../domain/ticket.repository';
import { TicketCreatorRequest } from './ticket_creator_request';
import { TicketId } from '../../domain/ticked_id';
import { TicketDescription } from '../../domain/ticked_description';
import { TicketStatus } from '../../domain/ticked_status';
import { TicketPriority } from '../../domain/ticked_priority';

describe('TicketCreator', () => {
  let service: TicketCreator;

  beforeEach(async () => {
    const TicketRepositoryProvider = {
      provide: TicketRepository,
      useFactory: () => ({
        create: jest.fn((ticket: Ticket) => ticket),
      }),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [TicketCreator, TicketRepositoryProvider],
    }).compile();

    service = module.get<TicketCreator>(TicketCreator);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('it should return a success ticket', async () => {
    const request = new TicketCreatorRequest(
      'f09ae5e8-0f42-45ea-98b0-c2aa344e4a1a',
      'description',
      'CLOSED',
      1,
      new Date(),
    );

    const id = new TicketId(request.id());
    const description = new TicketDescription(request.description());
    const status = new TicketStatus(request.status());
    const priority = new TicketPriority(request.priority());
    const createdAt = request.createdAt();
    const ticket = new Ticket(id, description, status, priority, createdAt);

    expect(await service.run(request)).toEqual(ticket);
  });
});
