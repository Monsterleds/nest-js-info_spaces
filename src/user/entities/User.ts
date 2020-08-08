import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tb_user')
class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  email: string;

  @Column()
  password: string;
}

export default User;