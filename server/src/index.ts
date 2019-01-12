import { ApolloServer, gql } from 'apollo-server-express';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import resolvers from './resolvers';
import { readFileSync } from 'fs';


const app = express();

app.use(bodyParser.json(), cors());
app.use(bodyParser.urlencoded({ extended: false }));

const apollo = new ApolloServer({
  typeDefs: gql(readFileSync('./src/schema.graphql', 'UTF-8')),
  resolvers
});

apollo.applyMiddleware({ app });
app.listen(4000, () => {
  console.log('App is running on port:4000');
})


