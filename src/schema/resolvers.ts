import { User } from "../entity/User";
import { getRepository } from "typeorm";
import { UserResponse } from "./typedefs";
import { validateUser } from "../domain/user-validation";

export const resolvers = {
  Query: {
    hello: () => "Hello World!",
  },

  Mutation: {
    createUser: async (_: any, { user: args }: { user: UserResponse }) => {
      const user = new User();
      user.name = args.name;
      user.email = args.email;
      user.password = args.password;
      user.birthDate = args.birthDate;

      await validateUser(user);

      const newUser = await getRepository(User).save(user);
      return newUser;
    },
  },
};


