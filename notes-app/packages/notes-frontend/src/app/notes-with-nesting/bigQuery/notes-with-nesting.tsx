import {
  AvatarFragment,
  NoteFragment,
  useNotesWithNestingQuery,
} from './bigQuery.hook'

export const NotesWithNesting = () => {
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
      <Avatar avatar={note.avatar} />
    </div>
  )
}

const Avatar = ({ avatar }: { avatar: AvatarFragment }) => {
  return (
    <div>
      {avatar.url}
      {avatar.name}
    </div>
  )
}
