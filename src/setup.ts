import * as dotenv from 'dotenv';

import { ApolloServer } from 'apollo-server';
import { Connection, createConnection } from 'typeorm';
import { resolvers } from './schema/resolvers';
import { typeDefs } from './schema/typedefs';

export async function setupDatabase(): Promise<Connection> {
  const connection = await createConnection({
    type: "postgres",
    url: process.env.DATABASE_URL,
  });
  console.info('Database connected');
  return connection;
}

export async function setupServer(): Promise<void> {
  const server = new ApolloServer({ resolvers, typeDefs });
  const { url } = await server.listen({ port: process.env.PORT });
  console.info('running on', url);

}

export async function setup() {
  const path = process.env.TEST === 'true' ? `${__dirname}/../test.env` : `${__dirname}/../.env`
  dotenv.config({ path })
  setupDatabase()
  setupServer();
}
