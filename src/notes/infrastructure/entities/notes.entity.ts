import { Note } from 'src/notes/domain/notes.model';
import { TicketsEntity } from 'src/ticket/infrastructure/entities/ticket.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
class NotesEntity implements Note {
  constructor(obj: Partial<NotesEntity>) {
    Object.assign(this, obj);
  }

  @PrimaryGeneratedColumn()
  public id: number;

  @ManyToOne(() => TicketsEntity, (ticket) => ticket.id)
  @JoinColumn({ name: 'ticketId' })
  ticket: number;

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
