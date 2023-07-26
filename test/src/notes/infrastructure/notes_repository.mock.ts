import { NoteRepository } from '@app/notes/domain/notes.repository';
import { Note } from '@app/notes/domain/notes.model';

export class NoteRepositoryMock implements NoteRepository {
  public notes: Note[] = [];

  async findAll(): Promise<Note[]> {
    return Promise.resolve(this.notes);
  }

  async getEmptyData(): Promise<Note[]> {
    return Promise.resolve(this.notes);
  }

  create(ticket: Note): Promise<Note> {
    return Promise.resolve(ticket);
  }
}
