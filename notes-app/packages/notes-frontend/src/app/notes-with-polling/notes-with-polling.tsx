// import { useEffect } from 'react'
import { useNotesForPollingQuery } from './notes-with-polling.hook'

export const NotesWithPolling = () => {
  const { data, startPolling } = useNotesForPollingQuery({
    fetchPolicy: 'no-cache',
    pollInterval: 2000,
  })

  // is fixed with apollo version 3.7 but pollInterval is broken instead xD
  // https://github.com/apollographql/apollo-client/issues/9819
  // useEffect(() => {
  // startPolling(2000)
  // }, [])

  return <div>{JSON.stringify(data)}</div>
}
