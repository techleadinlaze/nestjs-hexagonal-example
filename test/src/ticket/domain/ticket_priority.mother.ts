import { IntegerMother } from '@testApp/src/shared/domain/integer.mother';
import { TicketPriority } from '@app/ticket/domain/ticked_priority';

export class TicketPriorityMother {
  public static create(value: number): TicketPriority {
    return new TicketPriority(value);
  }

  public static random(): TicketPriority {
    return this.create(IntegerMother.random(1));
  }
}
