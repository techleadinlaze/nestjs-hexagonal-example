import { Ticket, TicketStatus } from 'src/ticket/domain/model/ticket.model';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
class TicketsEntity implements Ticket {
  constructor(obj: Partial<TicketsEntity>) {
    Object.assign(this, obj);
  }

  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public description: string;

  @Column({ type: 'enum', enum: TicketStatus, default: TicketStatus.OPEN })
  public status: TicketStatus;

  @Column()
  public priority: number;

  @Column({
    type: 'timestamptz',
    name: 'created_at',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date;
}

export default TicketsEntity;
