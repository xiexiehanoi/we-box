import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Folder } from './folders.entity';
import { HashTagCategory } from './hashtagcategory.entity';

@Entity()
export class File {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  folderId: number;

  @Column()
  fileName: string;

  @Column({ nullable: true })
  hashTagId: number | null;

  @Column()
  originalFileName: string;

  @Column()
  mimetype: string;

  @Column()
  size: number;

  @Column()
  path: string;

  @Column({ default: () => 'CURRENT_TIMESTAMP' })
  uploadedAt: Date;

  @ManyToOne(() => Folder)
  @JoinColumn({ name: 'folderId' })
  folder: Folder;

  @ManyToOne(() => HashTagCategory)
  @JoinColumn({ name: 'hashTagId' })
  hashTagCategory: HashTagCategory;
}
