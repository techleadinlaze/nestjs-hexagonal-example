import { Inject, Injectable } from '@nestjs/common';
import { Note } from '@app/notes/domain/notes.model';
import { NoteRepository } from '@app/notes/domain/notes.repository';
import { Uuid } from '@app/shared/domain/value_object/uuid';

/**
 * The implementation of the inbound port INoteService.
 */
@Injectable()
export class NoteCreator {
  constructor(
    @Inject(NoteRepository)
    private readonly noteRepository: NoteRepository,
  ) {}

  async run(body: Note): Promise<Note> {
    await this.noteRepository.create(body);
    return body;
  }
}
