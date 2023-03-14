import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'
import { importSchema } from 'graphql-import'
import { Note, Resolvers } from './resolverTypes'
import { aNote } from '@notes-app/graphql-mocks'

const typeDefs = importSchema('**/schema.graphql')

const notes: Note[] = []

const resolvers: Resolvers = {
  Query: {
    notes: () => {
      return notes
    },
    notesWithoutId: () => {
      return []
    },
  },
  Mutation: {
    saveNote: () => {
      const note = aNote()
      notes.push(note)
      return note
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
