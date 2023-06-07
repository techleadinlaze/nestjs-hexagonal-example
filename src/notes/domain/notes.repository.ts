import { Note } from './notes.model';

/**
 * Interface for Note Repository, outbound port
 */
export interface NoteRepository {
  create(note: Note): Promise<Note>;
  findAll(query): Promise<Note[]>;
}

export const NoteRepository = Symbol('NoteRepository');
