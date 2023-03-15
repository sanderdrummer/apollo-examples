import { useState } from 'react'
import {
  useNoteByIdQuery,
  useNotesQuery,
  useSaveNoteMutation,
  NotesDocument,
  NotesQuery,
} from './notes.hook'

const NoteList = ({ onSelect }: { onSelect(id: string): void }) => {
  const { data, refetch } = useNotesQuery({})
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
          // update approach
          // update: (cache, { data }) => {
          //   const note = data?.saveNote
          //   if (!note) return
          //
          //   const query = cache.readQuery<NotesQuery>({
          //     query: NotesDocument,
          //   })
          //   const notes = query?.notes ?? []
          //   const noteUpdated = notes.find((maybeNote) => {
          //     return maybeNote?.id === note.id
          //   })
          //   const updatedNotes = noteUpdated
          //     ? notes.map((maybeNote) => {
          //       if (maybeNote === noteUpdated) {
          //         return note
          //       }
          //       return maybeNote
          //     })
          //     : [...notes, note]
          //   cache.writeQuery<NotesQuery>({
          //     query: NotesDocument,
          //     data: {
          //       ...query,
          //       notes: updatedNotes,
          //     },
          //   })
          // },
          // refetch approach
          // refetchQueries: ['notes'],
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
