import { TicketId } from '@app/ticket/domain/ticked_id';
import { UuidMother } from '@testApp/src/shared/domain/uuid.mother';

export class TicketIdMother {
  public static create(value: string): TicketId {
    return new TicketId(value);
  }

  public static random(): TicketId {
    return this.create(UuidMother.random());
  }
}
