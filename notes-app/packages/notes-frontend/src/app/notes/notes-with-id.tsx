import { useState } from 'react'
import {
  useNoteByIdQuery,
  useNotesQuery,
  useSaveNoteMutation,
} from './notes.hook'

const NoteList = ({ onSelect }: { onSelect(id: string): void }) => {
  const { data, refetch } = useNotesQuery({})
  console.log('rerender', data)
  return (
    <div>
      <ul>
        {data?.notes?.map((note) =>
          note ? (
            <li onClick={() => onSelect(note.id)} key={note.id}>
              {note.id} {note.text} {note.created}
            </li>
          ) : null
        )}
      </ul>
      <button onClick={() => refetch()}> refetch </button>
    </div>
  )
}

const NoteForm = ({ selected = '' }) => {
  const { data, loading } = useNoteByIdQuery(
    selected
      ? {
        variables: { id: selected },
      }
      : { skip: true }
  )
  const [saveNote] = useSaveNoteMutation()

  return loading ? (
    <div>loading...</div>
  ) : (
    <form
      onSubmit={async (e) => {
        e.preventDefault()
        const form = e.currentTarget
        const text = form.elements.item(0)?.value
        const id = data?.noteById?.id
        await saveNote({
          variables: {
            note: {
              id,
              text,
              created: new Date().toISOString(),
            },
          },
        })
      }}
    >
      <input
        defaultValue={data?.noteById.text ?? ''}
        key={data?.noteById.id}
        type="text"
        name="text"
        required
      />
      <button type="submit">save</button>
      <div>{JSON.stringify(data?.noteById)}</div>
    </form>
  )
}

export const NotesWithId = () => {
  const [selected, setSelected] = useState('')
  return (
    <div
      css={{
        display: 'grid',
        gap: '1rem',
        gridTemplateColumns: '1fr 1fr',
      }}
    >
      <NoteList onSelect={setSelected} />
      <NoteForm selected={selected} />
      <button onClick={() => setSelected('')}>reset</button>
    </div>
  )
}
