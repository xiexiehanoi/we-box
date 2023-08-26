import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Authority } from './authority.entity';

@Entity('invites')
export class Invite {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Authority)
  @JoinColumn({ name: 'authorityId' })
  authority: Authority;
}
