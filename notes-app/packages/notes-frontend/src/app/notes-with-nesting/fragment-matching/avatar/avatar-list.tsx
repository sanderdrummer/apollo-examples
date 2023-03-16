import { useQuery } from '@apollo/client'
import { graphql } from '@notes-app/graphql-types'
import { Avatar } from './avatar'

const avatarList = graphql(`
  query avatarList {
    notesWithNesting {
      id
      avatar {
        ...avatar
      }
    }
  }
`)

export const AvatarList = () => {
  const { data } = useQuery(avatarList)
  return (
    <div>
      {data?.notesWithNesting?.map((item) => (
        <Avatar key={item.id} avatar={item.avatar} />
      ))}
    </div>
  )
}
