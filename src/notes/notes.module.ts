import { Logger, Module } from '@nestjs/common';
import { NoteController } from './controllers/notes.controller';
import { NoteFinder } from './application/find/note-create.service';
import { NoteRepository } from './domain/notes.repository';
import { NoteCreator } from './application/create/note-create.service';
import { NoteInMemory } from './infrastructure/driven/notes.memory';

@Module({
  imports: [Logger],
  controllers: [NoteController],
  providers: [
    NoteFinder,
    {
      provide: NoteRepository,
      useClass: NoteInMemory,
    },
    NoteCreator,
    {
      provide: NoteRepository,
      useClass: NoteInMemory,
    },
  ],
})
export class NotesModule {}
