import { Entity, PrimaryGeneratedColumn, Column, Connection, BaseEntity } from 'typeorm';

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  birthDate: string;
}

export async function createUser(database: Connection) {
  const user = {
    ...new User(),
    name: 'Monalisa',
    email: 'mona@gmail',
    password: '123456',
    birthDate: '09/07/1993',
  };

  const newUser = await database.manager.save(user);
  console.log('User has been saved. user id is', newUser.id);
}
