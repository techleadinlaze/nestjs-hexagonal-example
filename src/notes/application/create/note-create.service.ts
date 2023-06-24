import { Inject, Injectable } from '@nestjs/common';
import { Note } from '../../domain/notes.model';
import { NoteRepository } from '../../domain/notes.repository';

/**
 * The implementation of the inbound port INoteService.
 */
@Injectable()
export class NoteCreator {
  constructor(
    @Inject(NoteRepository)
    private readonly noteRepository: NoteRepository,
  ) {}

  async run(body: any): Promise<Note> {
    const note: Note = {
      description: body.description,
      ticketId: body.ticketId,
    };
    await this.noteRepository.create(note);
    return note;
  }
}
