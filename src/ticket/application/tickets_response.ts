import { Ticket } from '@app/ticket/domain/ticket.model';
import { TicketPrimitive } from '@app/ticket/domain/ticket.primitive';
import { HttpResponse } from '@app/shared/domain/http_response';

export class TicketsResponse extends HttpResponse<TicketPrimitive[]> {
  public constructor(data: Ticket[], succecs: boolean, message: string) {
    super(
      data.map((ticket): TicketPrimitive => ticket.toPrimitives()),
      succecs,
      message,
    );
  }
}
