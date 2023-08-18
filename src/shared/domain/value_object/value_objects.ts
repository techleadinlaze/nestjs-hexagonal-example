import { Primitives } from '../types/primitives.type';
import { InvalidArgumentError } from './invalid_argument_error';

export abstract class ValueObject<T extends Primitives> {
  public readonly value: T;

  public constructor(value: T) {
    this.value = value;
    this.ensureValueIsDefined(value);
  }

  private ensureValueIsDefined(value: T): void {
    if (value === null || value === undefined) {
      throw new InvalidArgumentError('Value must be defined');
    }
  }

  public equals(other: ValueObject<T>): boolean {
    return (
      other.constructor.name === this.constructor.name &&
      other.value === this.value
    );
  }

  public toString(): string {
    return this.value.toString();
  }
}
