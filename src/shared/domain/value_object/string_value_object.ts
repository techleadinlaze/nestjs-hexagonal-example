export abstract class StringValueObject {
  public constructor(private readonly _value: string) {}

  public value(): string {
    return this._value;
  }
}
