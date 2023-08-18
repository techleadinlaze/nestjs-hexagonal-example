import { Module } from '@nestjs/common';
import { NoteController } from '@app/notes/controllers/notes.controller';
import { NoteFinder } from '@app/notes/application/note_finder.service';
import { NoteRepository } from '@app/notes/domain/notes.repository';
import { NoteCreator } from '@app/notes/application/note_create.service';
import { NotesTypeOrm } from '@app/notes/infrastructure/persistence/notes.typeorm';

@Module({
  controllers: [NoteController],
  providers: [
    NoteFinder,
    {
      provide: NoteRepository,
      useClass: NotesTypeOrm,
    },
    NoteCreator,
    {
      provide: NoteRepository,
      useClass: NotesTypeOrm,
    },
  ],
})
export class NotesModule {}
