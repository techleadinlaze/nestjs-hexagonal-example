import { ValueObjectTransformer } from '@app/shared/infrastructure/persistence/typeorm/value_object_transformer';
import { TicketCreatedAt } from '@app/ticket/domain/ticked_created_at';
import { TicketDescription } from '@app/ticket/domain/ticked_description';
import { TicketId } from '@app/ticket/domain/ticked_id';
import { TicketPriority } from '@app/ticket/domain/ticked_priority';
import { TicketStatus } from '@app/ticket/domain/ticked_status';
import { Ticket } from '@app/ticket/domain/ticket.model';
import { EntitySchema } from 'typeorm';

export const TicketsEntity = new EntitySchema<Ticket>({
  name: 'Ticket',
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
      transformer: ValueObjectTransformer(TicketCreatedAt),
    },
  },
});
