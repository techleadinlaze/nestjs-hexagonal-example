import { Note } from 'src/notes/domain/notes.model';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
class NotesEntity implements Note {
  constructor(obj: Partial<NotesEntity>) {
    Object.assign(this, obj);
  }

  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public ticketId: number;

  @Column()
  public description: string;

  @Column({
    type: 'timestamptz',
    name: 'created_at',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date;
}

export default NotesEntity;
