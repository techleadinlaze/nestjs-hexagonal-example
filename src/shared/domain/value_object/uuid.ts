import { v4 as uuidv4 } from 'uuid';
import { validate as uuidValidate } from 'uuid';

export class Uuid {
  public constructor(private readonly _value: string) {
    this.ensureIsValidUuid(this._value);
  }

  public static random(): Uuid {
    return new Uuid(uuidv4());
  }

  public value(): string {
    return this._value;
  }

  private ensureIsValidUuid(id: string): void {
    if (!uuidValidate(id)) {
      throw new TypeError(`${Uuid.name} does not allow the value`);
    }
  }
}
