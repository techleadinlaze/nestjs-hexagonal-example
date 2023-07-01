import { Ticket } from 'src/ticket/domain/ticket.model';
import { TicketPrimitive } from 'src/ticket/domain/ticket.primitive';
import { HttpResponse } from '../../../shared/domain/http_response';

export class TicketsResponse extends HttpResponse<TicketPrimitive[]> {
  constructor(data: Ticket[], succecs: boolean, message: string) {
    super(
      data.map((ticket) => ticket.toPrimitives()),
      succecs,
      message,
    );
  }
}
