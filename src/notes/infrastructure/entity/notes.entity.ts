import { Note } from 'src/notes/domain/notes.model';
import TicketsEntity from 'src/ticket/infrastructure/entity/ticket.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
class NotesEntity implements Note {
  constructor(obj: Partial<NotesEntity>) {
    Object.assign(this, obj);
  }

  @PrimaryGeneratedColumn()
  public id: number;

  @ManyToOne(() => TicketsEntity, (ticket) => ticket.id)
  tiket: number;

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
