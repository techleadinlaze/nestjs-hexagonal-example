import { Note } from '@app/notes/domain/notes.model';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
} from 'typeorm';

@Entity()
export class NotesEntity extends Note {
  @PrimaryColumn({
    nullable: false,
    name: 'id',
  })
  id: string;

  @Column({
    type: 'text',
    nullable: false,
    name: 'description',
  })
  description: string;

  @CreateDateColumn({
    type: 'timestamp',
    name: 'created_at',
    nullable: false,
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  createdAt: Date;
}
