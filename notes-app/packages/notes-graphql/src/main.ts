import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'
import { importSchema } from 'graphql-import'

const typeDefs = importSchema('**/schema.graphql')

const resolvers = {
  Query: {
    notes: () => {
      return []
    },
    notesWithoutId: () => {
      return []
    },
  },
}

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
  typeDefs,
  resolvers,
})

// Passing an ApolloServer instance to the `startStandaloneServer` function:
//  1. creates an Express app
//  2. installs your ApolloServer instance as middleware
//  3. prepares your app to handle incoming requests
startStandaloneServer(server, {
  listen: { port: 4000 },
}).then((info) => {
  console.info(info)
})
