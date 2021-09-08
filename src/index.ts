import 'reflect-metadata';

import { ApolloServer } from 'apollo-server';
import { createConnection} from 'typeorm';
import { User } from './entity/user';

const resolvers = {
    Query: {
      hello() {
        return 'Hello world!';
      }
    },
  };

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

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
  .then((connection) => {
    let user = new User();
    user.firstName = 'Mona';
    user.lastName = 'Pereira';
    user.isActive = true;

    return connection.manager.save(user).then((user) => {
      console.log('User has been saved', user.id);
    });
  })
  .catch((error) => console.log(error));

const server = new ApolloServer({ resolvers, typeDefs });

server.listen().then(({ url }) => console.log(`Running server at ${url}.`));
