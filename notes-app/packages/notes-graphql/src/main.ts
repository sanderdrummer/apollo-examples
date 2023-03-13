import { ApolloServer } from '@apollo/server'
import express from 'express'

const host = process.env.HOST ?? 'localhost'
const port = process.env.PORT ? Number(process.env.PORT) : 3000

const app = express()

app.get('/', (req, res) => {
  res.send({ message: 'Hello API' })
})

app.listen(port, host, () => {
  console.log(`[ ready ] http://${host}:${port}`)
})

const resolvers = {
  Query: {
    notes: () => [],
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
const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
})
