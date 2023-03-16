import { FragmentType, graphql, useFragment } from '@notes-app/graphql-types'

export const AvatarFragment = graphql(`
  fragment avatar on Avatar {
    id
    url
    name
  }
`)

export const Avatar = ({
  avatar: avatarFragment,
}: {
  avatar: FragmentType<typeof AvatarFragment>
}) => {
  const avatar = useFragment(AvatarFragment, avatarFragment)
  return (
    <div>
      Avatar: {avatar.url} {avatar.name}
    </div>
  )
}
