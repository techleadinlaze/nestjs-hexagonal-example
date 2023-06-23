export abstract class NumberValueObject {
  public constructor(private readonly _value: number) {}

  public value(): number {
    return this._value;
  }

  public toString(): string {
    return this.value().toString();
  }
}
