import { Ticket } from '../model/ticket.model';

/**
 * Interface for Ticket Repository, outbound port
 */
export interface TicketRepository {
  create(ticket: Ticket): Promise<Ticket>;
  findAll(query): Promise<Ticket[]>;
}

export const TicketRepository = Symbol('TicketRepository');
