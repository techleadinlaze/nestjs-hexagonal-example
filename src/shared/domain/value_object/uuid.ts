import { v4 as uuidv4 } from 'uuid';
import { validate as uuidValidate } from 'uuid';
import { ValueObject } from './value_objects';
import { InvalidArgumentError } from './invalid_argument_error';

export class Uuid extends ValueObject<string> {
  constructor(value: string) {
    super(value);
    this.ensureIsValidUuid(value);
  }

  public static random(): Uuid {
    return new Uuid(uuidv4());
  }

  private ensureIsValidUuid(id: string): void {
    if (!uuidValidate(id)) {
      throw new InvalidArgumentError(
        `<${this.constructor.name}> does not allow the value <${id}>`,
      );
    }
  }
}
