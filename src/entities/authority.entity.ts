import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('authorities')
export class Authority {
  @PrimaryGeneratedColumn()
  id: number;
}
