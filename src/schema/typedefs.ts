import { gql } from 'apollo-server';

export interface UserResponse {
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
