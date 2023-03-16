import { Route, Routes, Link } from 'react-router-dom'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import { NotesWithId } from './notes/notes-with-id'
import { NotesWithoutId } from './notesWithoutId/notes-without-id'
import { NotesWithPolling } from './notes-with-polling/notes-with-polling'
import { NotesWithFragments } from './notes-with-nesting/useFragments/notes-with-nesting'
import { NotesWithNesting } from './notes-with-nesting/bigQuery/notes-with-nesting'

const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache(),
})

export function App() {
  return (
    <ApolloProvider client={client}>
      <div
        css={{
          display: 'grid',
          gridTemplateColumns: 'max-content 1fr',
          gap: '1rem',
        }}
      >
        <div role="navigation">
          <ul>
            <li>
              <Link to="/notes">Notes</Link>
            </li>
            <li>
              <Link to="/notes-without-id">Notes without id</Link>
            </li>
            <li>
              <Link to="/notes-with-polling">Notes with polling</Link>
            </li>
            <li>
              <Link to="/nesting-big-query">Nesting Big Query</Link>
            </li>
            <li>
              <Link to="/nesting-fragments">Nesting Fragments</Link>
            </li>
          </ul>
        </div>
        <Routes>
          <Route path="/notes" element={<NotesWithId />} />
          <Route path="/notes-without-id" element={<NotesWithoutId />} />
          <Route path="/notes-with-polling" element={<NotesWithPolling />} />
          <Route path="/nesting-big-query" element={<NotesWithNesting />} />
          <Route path="/nesting-fragments" element={<NotesWithFragments />} />
        </Routes>
      </div>
    </ApolloProvider>
  )
}

export default App
