import { TicketCreator } from '@app/ticket/application/create/ticket_creator.service';
import { Ticket } from '@app/ticket/domain/ticket.model';
import { TicketId } from '@app/ticket/domain/ticked_id';
import { TicketDescription } from '@app/ticket/domain/ticked_description';
import { TicketStatus } from '@app/ticket/domain/ticked_status';
import { TicketPriority } from '@app/ticket/domain/ticked_priority';
import { TicketCreatedAt } from '@app/ticket/domain/ticked_created_at';
import { TicketPrimitive } from '@app/ticket/domain/ticket.primitive';
import { InvalidArgumentError } from '@app/shared/domain/value_object/invalid_argument_error';
import { TicketRepositoryMock } from '../../domain/ticket_repository.mock';

jest.mock('@app/ticket/domain/ticket.repository');

describe('TicketCreator', () => {
  let service: TicketCreator;
  let repositoryMock: TicketRepositoryMock;

  beforeEach(async () => {
    jest.clearAllMocks();
    repositoryMock = new TicketRepositoryMock();
    service = new TicketCreator(repositoryMock);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('it should return a success ticket', async () => {
    const request: TicketPrimitive = {
      id: 'f09ae5e8-0f42-45ea-98b0-c2aa344e4a1a',
      description: 'description',
      status: 'CLOSED',
      priority: 1,
      createdAt: new Date().toISOString(),
    };
    const ticket = Ticket.fromPrimitives(request);

    expect(await service.run(request)).toEqual(ticket);
  });

  it('it should return a error', async () => {
    const request: TicketPrimitive = {
      id: '',
      description: 'description',
      status: 'CLOSED',
      priority: 1,
      createdAt: new Date().toISOString(),
    };

    expect(() => new TicketId(request.id)).toThrow(InvalidArgumentError);
    expect(() => new TicketId(request.id)).toThrow(
      '<TicketId> does not allow the value <>',
    );
  });
});
