/* eslint-disable */
import * as Types from '@notes-app/graphql-types';

import { gql } from '@apollo/client';
export type AnotherAvatarFragment = { __typename?: 'Avatar', url: string, name: string };

export const AnotherAvatarFragmentDoc = gql`
    fragment AnotherAvatar on Avatar {
  url
  name
}
    `;