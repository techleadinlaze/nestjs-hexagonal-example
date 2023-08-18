import { Inject, Injectable } from '@nestjs/common';
import { Note } from '@app/notes/domain/notes.model';
import { NoteRepository } from '@app/notes/domain/notes.repository';

@Injectable()
export class NoteCreator {
  public constructor(
    @Inject(NoteRepository)
    private readonly noteRepository: NoteRepository,
  ) {}

  public async run(body: Note): Promise<Note> {
    await this.noteRepository.create(body);
    return body;
  }
}
