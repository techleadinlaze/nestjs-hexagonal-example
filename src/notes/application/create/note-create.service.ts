import { Inject, Injectable } from '@nestjs/common';
import { Note } from '@app/notes/domain/notes.model';
import { NoteRepository } from '@app/notes/domain/notes.repository';

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
    const note = new Note(
      body.id,
      body.description,
      body.ticketId,
      body.createdAt,
    );
    await this.noteRepository.create(note);
    return note;
  }
}
