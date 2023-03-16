import { useState } from 'react'
import { NoteForm } from './notes-form'
import { NoteList } from './notes-list'

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
