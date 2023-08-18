import { TicketFinder } from '@app/ticket/application/ticket_finder.service';
import { TicketRepositoryMock } from '../../infrastructure/ticket_repository.mock';
import { Ticket } from '@app/ticket/domain/ticket.model';
import { TicketMother } from '../../domain/ticket.mother.';
import { TicketsResponse } from '@app/ticket/application/tickets_response';

jest.mock('@app/ticket/domain/ticket.repository');

describe('TicketFinder', () => {
  let service: TicketFinder;
  let repositoryMock: TicketRepositoryMock;

  beforeEach(async () => {
    jest.clearAllMocks();
    repositoryMock = new TicketRepositoryMock();
    service = new TicketFinder(repositoryMock);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('it should return tickets', async () => {
    const tickets: Ticket[] = [TicketMother.random(), TicketMother.random()];
    jest
      .spyOn(repositoryMock, 'findAll')
      .mockReturnValue(Promise.resolve(tickets));
    const response = new TicketsResponse(tickets, true, 'ok');
    expect((await service.run({})).data).toEqual(response.data);
  });

  it('it should return an empty ticket', async () => {
    const tickets = repositoryMock.getEmptyData();
    jest.spyOn(repositoryMock, 'findAll').mockReturnValue(tickets);

    const response = new TicketsResponse(await tickets, true, 'ok');
    expect((await service.run({})).data).toEqual(response.data);
  });
});
