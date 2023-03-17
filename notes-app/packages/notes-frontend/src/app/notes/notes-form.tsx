import { useMutation, useQuery } from '@apollo/client'
import { graphql, getFragmentData } from '../../gql'

const notesFragment = graphql(`
  fragment NoteFormFragment on Note {
    created
    id
    text
  }
`)

const saveNotes = graphql(`
  mutation saveNote($note: NoteInput!) {
    saveNote(note: $note) {
      ...NoteFormFragment
    }
  }
`)

const noteById = graphql(`
  query noteById($id: ID!) {
    noteById(id: $id) {
      ...NoteFormFragment
    }
  }
`)

export const NoteForm = ({ selected = '' }) => {
  const { data, loading } = useQuery(
    noteById,
    selected
      ? {
        variables: { id: selected },
      }
      : { skip: true }
  )
  const [saveNote] = useMutation(saveNotes)
  // reveal the data
  const note = getFragmentData(notesFragment, data?.noteById)
  return loading ? (
    <div>loading...</div>
  ) : (
    <form
      onSubmit={async (e) => {
        e.preventDefault()
        const form = e.currentTarget
        const text = form.elements.item(0)?.value
        const id = note?.id
        await saveNote({
          variables: {
            note: {
              id,
              text,
              created: new Date().toISOString(),
            },
          },
          refetchQueries: ['notes'],
        })
      }}
    >
      <input
        defaultValue={note?.text ?? ''}
        key={note?.id}
        type="text"
        name="text"
        required
      />
      <button type="submit">save</button>
      <div>{JSON.stringify(note)}</div>
    </form>
  )
}
