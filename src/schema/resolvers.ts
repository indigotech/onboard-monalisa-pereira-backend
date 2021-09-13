import { UserResponse } from "./typedefs";

export const resolvers = {

  Query: {
    hello: () => 'Hello World!',
  },

  Mutation: {
    createUser: ( { user: args }: { user: UserResponse }) => {
      const user = {
        id: Math.floor(Math.random() * 100),
        name: args.name,
        email: args.email,
        birthDate: args.birthDate,
      };

      return user;
    },
}

}
