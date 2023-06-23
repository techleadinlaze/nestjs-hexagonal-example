import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NoteRepository } from 'src/notes/domain/notes.repository';
import NotesEntity from '../entities/notes.entity';
import { Note } from 'src/notes/domain/notes.model';

@Injectable()
export class NoteTypeOrm implements NoteRepository {
  constructor(
    @InjectRepository(NotesEntity)
    private notesRepository: Repository<NotesEntity>,
  ) {}

  async findAll(query): Promise<Note[]> {
    const search = query.search || '';
    const notes = this.notesRepository.createQueryBuilder('notes');
    notes.innerJoinAndSelect('notes.ticket', 'ticket');
    if (search) {
      notes.where('description ILIKE lower(:search)', {
        search: `%${search}%`,
      });
    }
    return await notes.getMany();
  }

  async create(note: Note): Promise<any> {
    try {
      const newNote = new NotesEntity(note);
      await this.notesRepository.save(newNote);
      return newNote;
    } catch (error) {
      throw error;
    }
  }
}
