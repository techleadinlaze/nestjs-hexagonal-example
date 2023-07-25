import { TicketCreatedAt } from '@app/ticket/domain/ticked_created_at';
import { DateMother } from '@testApp/src/shared/domain/date.mother';

export class TicketCreatedAtMother {
  public static create(value: string): TicketCreatedAt {
    return new TicketCreatedAt(value);
  }

  public static random(): TicketCreatedAt {
    return this.create(DateMother.random());
  }
}
