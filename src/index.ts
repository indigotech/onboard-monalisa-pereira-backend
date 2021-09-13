import { ApolloServer } from 'apollo-server';
import { createConnection} from 'typeorm';
import { createUser, User } from './entity/user';
import { resolvers, typeDefs } from './schema';

createConnection({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'monakairine',
  password: '123123',
  database: 'databoard_db',
  entities: [User],
  synchronize: true,
  logging: false,
})
  .then((database) => {
    createUser(database);
  })
  .catch((error) => console.log(error));

const server = new ApolloServer({ resolvers, typeDefs });

server.listen().then(({ url }) => console.log(`Running server at ${url}.`));
