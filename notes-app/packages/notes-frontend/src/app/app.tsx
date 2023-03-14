import { Route, Routes, Link } from 'react-router-dom'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import { NotesWithId } from './notes/notes-with-id'

const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache(),
})

export function App() {
  return (
    <ApolloProvider client={client}>
      <div role="navigation">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/notes">Notes</Link>
          </li>
        </ul>
      </div>
      <Routes>
        <Route path="/notes" element={<NotesWithId />} />
      </Routes>
      {/* END: routes */}
    </ApolloProvider>
  )
}

export default App
