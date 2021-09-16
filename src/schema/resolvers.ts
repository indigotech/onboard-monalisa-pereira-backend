import { User } from '../entity/User';
import { getRepository } from 'typeorm';
import { UserResponse } from './typedefs';
import { validateUser } from '../domain/validate-user';
import { CryptoService } from '../core/cripto-service';

export const resolvers = {
  Query: {
    hello: () => 'Hello World!',
  },

  Mutation: {
    createUser: async (_: any, { user: args }: { user: UserResponse }) => {
      const user = {
        ...new User(),
        name: args.name,
        email: args.email,
        password: args.password,
        birthDate: args.birthDate,
      }

      await validateUser(user);
      user.password = CryptoService.encode(args.password);

      return getRepository(User).save(user);
    },
  },
};
