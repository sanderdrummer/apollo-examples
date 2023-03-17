import { graphql, getFragmentData, FragmentType } from '../../gql'

export const NoteFragment = graphql(`
  fragment NoteFragment on Note {
    id
    text
    created
  }
`)

export const NotesItem = ({
  note: noteFragment,
  onClick,
}: {
  note: FragmentType<typeof NoteFragment>
  onClick: (id: string) => void
}) => {
  const note = getFragmentData(NoteFragment, noteFragment)
  return (
    <li onClick={() => onClick(note.id)} key={note.id}>
      {note.id} {note.text} {note.created}
    </li>
  )
}
