import { Uuid } from '@app/shared/domain/value_object/uuid';

export class Note {
  constructor(
    public readonly id: string,
    public readonly ticketId: string,
    public readonly description: string,
    public readonly createdAt: Date,
  ) {
    // example, this is not recommended, it should be a value object.
    //new Uuid(id);
  }
}
