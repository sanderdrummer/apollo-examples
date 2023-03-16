import { useMutation, useQuery } from '@apollo/client'
import { graphql } from '@notes-app/graphql-types'

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
      created
      id
      text
    }
  }
`)

const noteById = graphql(`
  query noteById($id: ID!) {
    noteById(id: $id) {
      created
      id
      text
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
          refetchQueries: ['notes'],
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
