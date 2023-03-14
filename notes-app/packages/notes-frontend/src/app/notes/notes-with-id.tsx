import { useNotesQuery } from './notes.hook'

export const NotesWithId = () => {
  const data = useNotesQuery()
  console.log(data)
  return <div>hello</div>
}
