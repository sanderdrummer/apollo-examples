import { useFragment_experimental } from '@apollo/client'
import { AnotherAvatarFragmentDoc, AnotherAvatarFragment } from './avatar.hook'

export const AvatarByFragment = ({ id }: { id: string }) => {
  const { data } = useFragment_experimental<AnotherAvatarFragment>({
    fragment: AnotherAvatarFragmentDoc,
    from: {
      __typename: 'Avatar',
      id,
    },
  })

  return (
    <div>
      Avatar: {data?.url} {data?.name}
    </div>
  )
}
