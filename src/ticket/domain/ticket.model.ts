import { TicketDescription } from './ticked_description';
import { TicketId } from './ticked_id';
import { TicketPriority } from './ticked_priority';
import { TicketStatus } from './ticked_status';
import { TicketCreatedAt } from './ticked_created_at';
import { Status } from '../enum/status.enum';

export class Ticket {
  public constructor(
    public readonly id: TicketId,
    public readonly description: TicketDescription,
    public readonly status: TicketStatus,
    public readonly priority: TicketPriority,
    public readonly createdAt: TicketCreatedAt,
  ) {}

  static fromPrimitives(request: {
    id: string;
    description: string;
    status: Status;
    priority: number;
    createdAt: string;
  }): Ticket {
    return new Ticket(
      new TicketId(request.id),
      new TicketDescription(request.description),
      new TicketStatus(request.status),
      new TicketPriority(request.priority),
      new TicketCreatedAt(request.createdAt),
    );
  }

  toPrimitives(): any {
    return {
      id: this.id.value,
      description: this.description.value,
      status: this.status.value,
      priority: this.priority.value,
      createdAt: this.createdAt.toString(),
    };
  }
}
