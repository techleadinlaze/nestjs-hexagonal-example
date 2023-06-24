import { Injectable } from '@nestjs/common';
import { Note } from '../../domain/notes.model';
import { NoteRepository } from '../../domain/notes.repository';

/**
 * This is the implementation of output port, to store things in memory.
 */
@Injectable()
export class NoteInMemory implements NoteRepository {
  private readonly notes: Note[] = [
    {
      id: 1,
      ticketId: 1,
      description: '',
      createdAt: new Date(),
    },
  ];

  create(note: Note): Promise<Note> {
    this.notes.push(note);
    return new Promise((resolve) => {
      return resolve(note);
    });
  }

  findAll(query): Promise<Note[]> {
    return new Promise((resolve) => {
      return resolve(this.notes);
    });
  }
}
