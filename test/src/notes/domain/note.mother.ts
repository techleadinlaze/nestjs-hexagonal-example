import { Note } from '@app/notes/domain/notes.model';
import { DateMother } from '@testApp/src/shared/domain/date.mother';
import { UuidMother } from '@testApp/src/shared/domain/uuid.mother';
import { WordMother } from '@testApp/src/shared/domain/word.mother';

export class NoteMother {
  public static create(
    id: string,
    ticketId: string,
    description: string,
    createdAt: Date,
  ): Note {
    return new Note(id, ticketId, description, createdAt);
  }

  public static random(): Note {
    return this.create(
      UuidMother.random(),
      UuidMother.random(),
      WordMother.random({ maxLength: 100 }),
      new Date(DateMother.random()),
    );
  }

  public static randomEmpyId(): Note {
    return this.create(
      '',
      UuidMother.random(),
      WordMother.random({ maxLength: 100 }),
      new Date(DateMother.random()),
    );
  }
}
