import { AvatarByFragment } from './avatar/avatar'
import {
  NoteFragment,
  useNotesWithNestingQuery,
} from '../bigQuery/bigQuery.hook'

export const NotesWithFragments = () => {
  const { data } = useNotesWithNestingQuery()

  return (
    <div>
      {data?.notesWithNesting.map((note) => (
        <NoteWithNesting key={note.id} note={note} />
      ))}
    </div>
  )
}

const NoteWithNesting = ({ note }: { note: NoteFragment }) => {
  return (
    <div
      css={{
        padding: '1rem',
        display: 'grid',
        gridAutoFlow: 'column',
        gap: '1rem',
      }}
    >
      {note.text}
      <AvatarByFragment id={note.avatar.id} />
    </div>
  )
}
