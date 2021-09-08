const { ApolloServer, gql } = require('apollo-server');

// Schema definition
const typeDefs = gql`
  type Query {
    hello: String
  }
`;

const resolvers = {
  Query: {
    hello() {
      return 'Hello world!';
    }
  },
};

const server = new ApolloServer({ typeDefs, resolvers, playground: true });

// Launch the server
server.listen().then(({ url }) => {
  console.log(`url ${url}`);
});
