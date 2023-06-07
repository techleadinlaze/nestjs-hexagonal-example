import { Logger, Module } from '@nestjs/common';
import NotesEntity from './infrastructure/entity/notes.entity';
import { NoteController } from './controllers/notes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NoteFinder } from './application/find/note-create.service';
import { NoteRepository } from './domain/notes.repository';
import { NoteTypeOrm } from './infrastructure/driven/notes.typeorm';
import { NoteCreator } from './application/create/note-create.service';

@Module({
  imports: [Logger, TypeOrmModule.forFeature([NotesEntity])],
  controllers: [NoteController],
  providers: [
    NoteFinder,
    {
      provide: NoteRepository,
      useClass: NoteTypeOrm,
    },
    NoteCreator,
    {
      provide: NoteRepository,
      useClass: NoteTypeOrm,
    },
  ],
})
export class NotesModule {}
