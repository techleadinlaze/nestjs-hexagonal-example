import { Inject, Injectable } from '@nestjs/common';
import { Note } from '../../domain/notes.model';
import { NoteRepository } from '../../domain/notes.repository';

/**
 * The implementation of the inbound port INoteService.
 */
@Injectable()
export class NoteFinder {
  constructor(
    @Inject(NoteRepository)
    private readonly noteRepository: NoteRepository,
  ) {}

  async run(query): Promise<Note[]> {
    return await this.noteRepository.findAll(query);
  }
}
