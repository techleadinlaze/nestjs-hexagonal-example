import { TicketDescription } from './ticked_description';
import { TicketId } from './ticked_id';
import { TicketPriority } from './ticked_priority';
import { TicketStatus } from './ticked_status';
import { TicketCreatedAt } from './ticked_created_at';

export class Ticket {
  public constructor(
    public readonly id: TicketId,
    public readonly description: TicketDescription,
    public readonly status: TicketStatus,
    public readonly priority: TicketPriority,
    public readonly createdAt: TicketCreatedAt,
  ) {}

  static fromPrimitives(plainData: {
    id: string;
    description: string;
    status: string;
    priority: number;
    createdAt: string;
  }): Ticket {
    return new Ticket(
      new TicketId(plainData.id),
      new TicketDescription(plainData.description),
      new TicketStatus(plainData.status),
      new TicketPriority(plainData.priority),
      new TicketCreatedAt(plainData.createdAt),
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
