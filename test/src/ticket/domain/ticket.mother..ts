import { TicketCreatedAt } from '@app/ticket/domain/ticked_created_at';
import { TicketDescription } from '@app/ticket/domain/ticked_description';
import { TicketId } from '@app/ticket/domain/ticked_id';
import { TicketPriority } from '@app/ticket/domain/ticked_priority';
import { TicketStatus } from '@app/ticket/domain/ticked_status';
import { Ticket } from '@app/ticket/domain/ticket.model';
import { TicketPrimitive } from '@app/ticket/domain/ticket.primitive';
import { TicketIdMother } from './ticket_id.mother';
import { TicketDescriptionMother } from './ticket_description.mother';
import { TicketStatusMother } from './ticket_status.mother';
import { TicketPriorityMother } from './ticket_priority.mother';
import { TicketCreatedAtMother } from './ticket_created_at.mother';

export class TicketMother {
  public static create(
    id: TicketId,
    description: TicketDescription,
    status: TicketStatus,
    priority: TicketPriority,
    createdAt: TicketCreatedAt,
  ): Ticket {
    return new Ticket(id, description, status, priority, createdAt);
  }

  public static from(request: TicketPrimitive): Ticket {
    return this.create(
      TicketIdMother.create(request.id),
      TicketDescriptionMother.create(request.description),
      TicketStatusMother.create(request.status),
      TicketPriorityMother.create(request.priority),
      TicketCreatedAtMother.create(request.createdAt),
    );
  }

  public static random(): Ticket {
    return this.create(
      TicketIdMother.random(),
      TicketDescriptionMother.random(),
      TicketStatusMother.random(),
      TicketPriorityMother.random(),
      TicketCreatedAtMother.random(),
    );
  }
}
