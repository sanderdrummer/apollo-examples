import { useQuery } from '@apollo/client'
import { graphql } from '@notes-app/graphql-types'
import { NotesItem } from './notes-item'

const notesQuery = graphql(`
  query notes {
    notes {
      id
      ...NoteFragment
    }
  }
`)

export const NoteList = ({ onSelect }: { onSelect(id: string): void }) => {
  const { data, refetch } = useQuery(notesQuery)
  return (
    <div>
      <ul>
        {data?.notes?.map((note) =>
          note ? (
            <NotesItem onClick={onSelect} key={note.id} note={note} />
          ) : null
        )}
      </ul>
      <button onClick={() => refetch()}> refetch </button>
    </div>
  )
}