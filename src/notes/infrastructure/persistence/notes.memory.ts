import { Injectable } from '@nestjs/common';
import { Note } from '@app/notes/domain/notes.model';
import { NoteRepository } from '@app/notes/domain/notes.repository';

/**
 * This is the implementation of output port, to store things in memory.
 */
@Injectable()
export class NoteInMemory implements NoteRepository {
  private readonly notes: Note[] = [
    {
      id: '5d93330a-4d90-4703-9526-fc66c5546eb6',
      ticketId: '5d93330a-4d90-4703-9526-fc66c5546eb6',
      description: 'aaa',
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
