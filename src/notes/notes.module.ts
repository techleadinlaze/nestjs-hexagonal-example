import { Logger, Module } from '@nestjs/common';
import { NoteController } from '@app/notes/controllers/notes.controller';
import { NoteFinder } from '@app/notes/application/find/note-create.service';
import { NoteRepository } from '@app/notes/domain/notes.repository';
import { NoteCreator } from '@app/notes/application/create/note-create.service';
import { NotesTypeOrm } from '@app/notes/infrastructure/persistence/notes.typeorm';

@Module({
  imports: [Logger],
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
