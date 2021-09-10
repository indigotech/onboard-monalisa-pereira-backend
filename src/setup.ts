import { ApolloServer } from 'apollo-server';
import { User } from './entity/user';
import { Connection, createConnection } from "typeorm";
import { resolvers, typeDefs } from './schema';

// setupDatabase()
//   .then((database) => {
//     console.log('db configurado');
//     createUser(database);
//   })
//   .catch(console.log);

export async function setupDatabase(): Promise<Connection> {
  const connection = await createConnection({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'monakairine',
    password: '123123',
    database: 'database',
    entities: [User],
    synchronize: true,
    logging: false,
  });
  console.log('Database connected')
  return connection;
}

export async function setupServer(): Promise<void> {
  const server = new ApolloServer({ resolvers, typeDefs });
  const { url } = await server.listen();
}

export async function setup() {
  setupDatabase();
  setupServer();
}
