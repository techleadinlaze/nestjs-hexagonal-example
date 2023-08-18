import { TicketId } from '@app/ticket/domain/ticked_id';
import { InvalidArgumentError } from '@app/shared/domain/value_object/invalid_argument_error';
import { TicketRepositoryMock } from '../../infrastructure/ticket_repository.mock';
import { TicketMother } from '../../domain/ticket.mother.';
import { TicketPrimitiveMother } from '../../domain/ticket_primitive.mother';
import { TicketPrimitive } from '@app/ticket/domain/ticket.primitive';
import { TicketCreator } from '@app/ticket/application/ticket_creator.service';

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
    const request: TicketPrimitive = TicketPrimitiveMother.random();
    const ticket = TicketMother.from(request);

    expect(await service.run(request)).toEqual(ticket);
  });

  it('it should return a error', async () => {
    const request: TicketPrimitive = TicketPrimitiveMother.random();
    request.id = '';

    expect(() => new TicketId(request.id)).toThrow(InvalidArgumentError);
    expect(() => new TicketId(request.id)).toThrow(
      '<TicketId> does not allow the value <>',
    );
  });
});
