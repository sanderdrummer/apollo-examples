import { useQuery } from '@apollo/client'
import { graphql } from '@notes-app/graphql-types'
import { NoteItem } from './note-details'

const queryNotes = graphql(
  `
    query NotesWithNesting {
      notesWithNesting {
        id
        ...NoteItem
      }
    }
  `
)
export const NotesFragmentMatching = () => {
  const { data } = useQuery(queryNotes)
  return (
    <div>
      {data?.notesWithNesting.map((note) => (
        <NoteItem key={note.id} note={note} />
      ))}
    </div>
  )
}
