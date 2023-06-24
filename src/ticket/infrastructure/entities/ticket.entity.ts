import { ValueObjectTransformer } from 'src/shared/infrastructure/persistence/typeorm/value_object_transformer';
import { TicketDescription } from 'src/ticket/domain/ticked_description';
import { TicketId } from 'src/ticket/domain/ticked_id';
import { TicketPriority } from 'src/ticket/domain/ticked_priority';
import { TicketStatus } from 'src/ticket/domain/ticked_status';
import { Ticket } from 'src/ticket/domain/ticket.model';
import { EntitySchema } from 'typeorm';

export const TicketsEntity = new EntitySchema<Ticket>({
  name: 'Tickets',
  tableName: 'tickets',
  target: Ticket,
  columns: {
    id: {
      type: 'character varying',
      primary: true,
      transformer: ValueObjectTransformer(TicketId),
    },
    description: {
      type: 'text',
      transformer: ValueObjectTransformer(TicketDescription),
    },
    status: {
      type: 'character varying',
      default: 'OPEN',
      transformer: ValueObjectTransformer(TicketStatus),
    },
    priority: {
      type: 'integer',
      transformer: ValueObjectTransformer(TicketPriority),
    },
    createdAt: {
      type: 'timestamptz',
      name: 'created_at',
      default: () => 'CURRENT_TIMESTAMP',
    },
  },
});
