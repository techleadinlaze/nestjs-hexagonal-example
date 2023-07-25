export class Note {
  constructor(
    public readonly id: string,
    public readonly ticketId: string,
    public readonly description: string,
    public readonly createdAt: Date,
  ) {}
}
