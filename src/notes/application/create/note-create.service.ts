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

  async run(body): Promise<Note> {
    const Note: Note = {
      description: body.description,
      ticket: body.tiketId,
    };
    await this.noteRepository.create(Note);
    return Note;
  }
}
