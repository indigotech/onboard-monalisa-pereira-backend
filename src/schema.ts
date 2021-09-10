import { gql } from 'apollo-server';

interface UserResponse {
  id: number;
  name: string;
  email: string;
  birthDate?: string;
}

export const typeDefs = gql`
  type Query {
    hello: String
  }

  input UserInput {
    name: String
    email: String
    password: String
    birthDate: String
  }

  type UserResponse {
    id: ID!
    name: String
    email: String!
    birthDate: String
  }

  type Mutation {
    createUser(user: UserInput): UserResponse
  }
`;

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

