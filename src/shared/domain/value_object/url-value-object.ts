import { InvalidArgumentError } from "./invalid_argument_error";
import { ValueObject } from "./value_objects";

export const URL_REGEX =
  /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/g;

export class UrlValueObject extends ValueObject<string> {
  public constructor(value: string) {
    super(value);
    this.ensureIsValidUrl(value);
  }

  private ensureIsValidUrl(url: string): void {
    if (url.match(URL_REGEX) === null) {
      throw new InvalidArgumentError(
        `<${this.constructor.name}> does not allow the value <${url}>`,
      );
    }
  }
}
