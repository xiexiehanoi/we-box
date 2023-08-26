import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'firstname' })
  firstName: string;

  @Column({ name: 'lastname' })
  lastName: string;

  @Column({ name: 'email' })
  email: string;

  @Column({ nullable: true, default: null })
  password: string;

  @Column({ default: false })
  isSocialAccountRegistered: boolean;
}
