export interface Ticket {
  id?: number;
  description: string;
  status?: TicketStatus;
  priority: number;
  createdAt?: Date;
}

export enum TicketStatus {
  OPEN = 'OPEN',
  IN_PROGRESS = 'IN_PROGRESS',
  CLOSED = 'CLOSED',
}
