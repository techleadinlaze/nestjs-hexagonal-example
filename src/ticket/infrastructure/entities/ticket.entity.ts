import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class TicketsEntity {
  constructor(obj: Partial<TicketsEntity>) {
    Object.assign(this, obj);
  }

  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public description: string;

  @Column({ default: 'OPEN' })
  public status: string;

  @Column()
  public priority: number;

  @Column({
    type: 'timestamptz',
    name: 'created_at',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date;
}
