import { ValueObject } from './value_objects';

export abstract class NumberValueObject extends ValueObject<number> {
  public isBiggerThan(other: NumberValueObject): boolean {
    return this.value > other.value;
  }
}
