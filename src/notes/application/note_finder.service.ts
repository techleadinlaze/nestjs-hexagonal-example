import { Inject, Injectable } from '@nestjs/common';
import { Note } from '@app/notes/domain/notes.model';
import { NoteRepository } from '@app/notes/domain/notes.repository';

@Injectable()
export class NoteFinder {
  public constructor(
    @Inject(NoteRepository)
    private readonly noteRepository: NoteRepository,
  ) {}

  public async run(query): Promise<Note[]> {
    return await this.noteRepository.findAll(query);
  }
}
