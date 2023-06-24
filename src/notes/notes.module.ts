import { Logger, Module } from '@nestjs/common';
import NotesEntity from './infrastructure/entities/notes.entity';
import { NoteController } from './controllers/notes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NoteFinder } from './application/find/note-create.service';
import { NoteRepository } from './domain/notes.repository';
import { NoteCreator } from './application/create/note-create.service';
import { NoteInMemory } from './infrastructure/driven/notes.memory';

@Module({
  imports: [Logger, TypeOrmModule.forFeature([NotesEntity])],
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
