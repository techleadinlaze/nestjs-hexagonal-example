import { TicketDescription } from './ticked_description';
import { TicketId } from './ticked_id';
import { TicketPriority } from './ticked_priority';
import { TicketStatus } from './ticked_status';

export class Ticket {
  public constructor(
    private readonly _id: TicketId,
    private readonly _description: TicketDescription,
    private readonly _status: TicketStatus,
    private readonly _priority: TicketPriority,
    private readonly _createdAt: Date,
  ) {}

  public id(): TicketId {
    return this._id;
  }

  public description(): TicketDescription {
    return this._description;
  }

  public status(): TicketStatus {
    return this._status;
  }

  public priority(): TicketPriority {
    return this._priority;
  }

  public createdAt(): Date {
    return this._createdAt;
  }
}
