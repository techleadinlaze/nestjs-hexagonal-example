import { Note } from '@app/notes/domain/notes.model';
import { EntitySchema } from 'typeorm';

export const NotesEntity = new EntitySchema<Note>({
  name: 'Note',
  tableName: 'notes',
  target: Note,
  columns: {
    id: {
      type: 'character varying',
      primary: true,
    },
    ticketId: {
      type: 'character varying',
    },
    description: {
      type: 'text',
    },
    createdAt: {
      type: 'timestamptz',
      name: 'created_at',
      default: (): string => 'CURRENT_TIMESTAMP',
    },
  },
});
