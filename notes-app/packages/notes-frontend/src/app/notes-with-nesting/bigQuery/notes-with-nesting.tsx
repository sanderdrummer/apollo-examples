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
        <NoteWithNesting note={note} />
      ))}
    </div>
  )
}

const NoteWithNesting = ({ note }: { note: NoteFragment }) => {
  return (
    <div>
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
