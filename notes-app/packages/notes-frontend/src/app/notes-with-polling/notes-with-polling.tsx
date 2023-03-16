import { useNotesForPollingQuery } from './notes-with-polling.hook'

export const NotesWithPolling = () => {
  const { data, startPolling } = useNotesForPollingQuery({
    fetchPolicy: 'no-cache',
    pollInterval: 2000,
  })

  return <div>{JSON.stringify(data)}</div>
}
