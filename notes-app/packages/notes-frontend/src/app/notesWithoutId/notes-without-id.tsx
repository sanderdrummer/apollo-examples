import { NoteWithoutId } from '@notes-app/graphql-types'
import { useState } from 'react'
import {
  useNoteWithoutIdQuery,
  useSaveNoteWithoutIdMutation,
} from './notes-without-id.hook'

const NoteList = ({ onSelect }: { onSelect(text: NoteWithoutId): void }) => {
  const { data, refetch } = useNoteWithoutIdQuery({})
  const note = data?.noteWithoutId
  return (
    <div>
      <ul>
        {note ? (
          <li onClick={() => onSelect(note)} key={note.text}>
            {note.text} {note.created}
          </li>
        ) : null}
      </ul>
      <button onClick={() => refetch()}> refetch </button>
    </div>
  )
}

const NoteForm = ({ selected }: { selected?: NoteWithoutId }) => {
  const [saveNote] = useSaveNoteWithoutIdMutation()

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault()
        const form = e.currentTarget
        const text = form.elements.item(0)?.value
        await saveNote({
          variables: {
            note: {
              text,
              created: new Date().toISOString(),
            },
          },
        })
      }}
    >
      <input
        defaultValue={selected?.text ?? ''}
        key={selected?.text ?? undefined}
        type="text"
        name="text"
        required
      />
      <button type="submit">save</button>
      <div>{JSON.stringify(selected)}</div>
    </form>
  )
}

export const NotesWithoutId = () => {
  const [selected, setSelected] = useState<undefined | NoteWithoutId>()
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
      <button onClick={() => setSelected(undefined)}>reset</button>
    </div>
  )
}
