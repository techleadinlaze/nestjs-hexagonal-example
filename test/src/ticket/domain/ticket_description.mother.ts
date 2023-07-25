import { TicketDescription } from '@app/ticket/domain/ticked_description';
import { WordMother } from '@testApp/src/shared/domain/word.mother';

export class TicketDescriptionMother {
  public static create(value: string): TicketDescription {
    return new TicketDescription(value);
  }

  public static random(): TicketDescription {
    return this.create(WordMother.random({ maxLength: 100 }));
  }
}
