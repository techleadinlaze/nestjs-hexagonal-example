export class TicketCreatorRequest {
  public constructor(
    private readonly _id: string,
    private readonly _description: string,
    private readonly _status: string,
    private readonly _priority: number,
    private readonly _createdAt: Date,
  ) {}

  public id(): string {
    return this._id;
  }

  public description(): string {
    return this._description;
  }

  public status(): string {
    return this._status;
  }

  public priority(): number {
    return this._priority;
  }

  public createdAt(): Date {
    return this._createdAt;
  }
}
