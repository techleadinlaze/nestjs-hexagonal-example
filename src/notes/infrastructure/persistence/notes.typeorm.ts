import { Injectable } from '@nestjs/common';
import { EntitySchema } from 'typeorm';
import { TypeOrmRepository } from '@app/shared/infrastructure/persistence/typeorm.repository';
import { NotesEntity } from '@app/notes/infrastructure/persistence/typeorm/notes.entity';
import { Note } from '@app/notes/domain/notes.model';
import { NoteRepository } from '@app/notes/domain/notes.repository';

@Injectable()
export class NotesTypeOrm
  extends TypeOrmRepository<Note>
  implements NoteRepository
{
  protected entitySchema(): EntitySchema<Note> {
    return NotesEntity;
  }

  public async findAll(query: Record<string, string>): Promise<Note[]> {
    const search = query.search || '';
    const repository = await this.repository();
    const notes = repository.createQueryBuilder();
    if (search) {
      notes.where('description ILIKE lower(:search)', {
        search: `%${search}%`,
      });
    }
    return await notes.getMany();
  }

  public async create(note: Note): Promise<Note> {
    return await this.persist(note);
  }
}
