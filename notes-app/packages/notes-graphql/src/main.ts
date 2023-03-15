import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'
import { importSchema } from 'graphql-import'
import { Note, Resolvers } from './resolverTypes'
import {
  aNote,
  aNotesForPolling,
  aNoteWithNesting,
  aNoteWithoutId,
} from '@notes-app/graphql-mocks'

const typeDefs = importSchema('**/schema.graphql')

const notes: Record<string, Note> = {}
let noteWithoutId = aNoteWithoutId()

const resolvers: Resolvers = {
  Query: {
    notes: () => {
      return Object.values(notes)
    },
    noteById: (_, args) => {
      const note = notes[args.id]
      if (!note) {
        throw Error('not found')
      }
      return note
    },
    noteWithoutId: () => {
      return noteWithoutId
    },
    notesForPolling: () => {
      return [aNotesForPolling(), aNotesForPolling(), aNotesForPolling()]
    },
    notesWithNesting: () => {
      return Array.from({ length: 100 }, () => aNoteWithNesting())
    },
  },
  Mutation: {
    saveNote: (_, args) => {
      const note = aNote(args.note)
      notes[note.id] = note
      return note
    },
    saveNoteWithoutId: (_, args) => {
      const updatedNote = aNoteWithoutId(args.note)
      noteWithoutId = updatedNote
      return updatedNote
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
