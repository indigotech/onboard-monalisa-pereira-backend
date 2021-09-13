import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Connection,
  BaseEntity,
} from "typeorm";

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  isActive: boolean;
}

export async function createUser(database: Connection) {
  const user = new User();
  user.firstName = "Monalisa";
  user.lastName = "Kairine";
  user.isActive = true;

  const newUser = await database.manager.save(user);
  console.log("User has been saved. user id is", newUser.id);
}
