import { FragmentType, graphql, useFragment } from '@notes-app/graphql-types'

export const NoteDetailsFragment = graphql(`
  fragment NoteItem on NoteWithNesting {
    id
    text
    avatar {
      id
      url
      name
    }
    User {
      id
      firstName
      lastName
    }
    NoteDetails {
      id
      headline
      subheadline
      details
    }
  }
`)
type NoteDetailsProps = {
  note: FragmentType<typeof NoteDetailsFragment>
}
export const NoteItem = ({ note: noteFragment }: NoteDetailsProps) => {
  const note = useFragment(NoteDetailsFragment, noteFragment)
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
    </div>
  )
}
