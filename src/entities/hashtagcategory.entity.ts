import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('hashTagCategories')
export class HashTagCategory {
  @PrimaryGeneratedColumn()
  id: number;
}
