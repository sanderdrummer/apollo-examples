/* eslint-disable */
import * as Types from '@notes-app/graphql-types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type NotesWithNestingQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type NotesWithNestingQuery = { __typename?: 'Query', notesWithNesting: Array<{ __typename?: 'NoteWithNesting', id: string, text: string, avatar: { __typename?: 'Avatar', id: string, url: string, name: string }, User: { __typename?: 'User', id: string, firstName: string, lastName: string }, NoteDetails: Array<{ __typename?: 'NoteDetails', id: string, headline: string, subheadline: string, details: string }> }> };

export type NoteFragment = { __typename?: 'NoteWithNesting', id: string, text: string, avatar: { __typename?: 'Avatar', id: string, url: string, name: string }, User: { __typename?: 'User', id: string, firstName: string, lastName: string }, NoteDetails: Array<{ __typename?: 'NoteDetails', id: string, headline: string, subheadline: string, details: string }> };

export type AvatarFragment = { __typename?: 'Avatar', id: string, url: string, name: string };

export type UserFragment = { __typename?: 'User', id: string, firstName: string, lastName: string };

export type NoteDetailsFragment = { __typename?: 'NoteDetails', id: string, headline: string, subheadline: string, details: string };

export const AvatarFragmentDoc = gql`
    fragment avatar on Avatar {
  id
  url
  name
}
    `;
export const UserFragmentDoc = gql`
    fragment user on User {
  id
  firstName
  lastName
}
    `;
export const NoteDetailsFragmentDoc = gql`
    fragment noteDetails on NoteDetails {
  id
  headline
  subheadline
  details
}
    `;
export const NoteFragmentDoc = gql`
    fragment note on NoteWithNesting {
  id
  text
  avatar {
    ...avatar
  }
  User {
    ...user
  }
  NoteDetails {
    ...noteDetails
  }
}
    ${AvatarFragmentDoc}
${UserFragmentDoc}
${NoteDetailsFragmentDoc}`;
export const NotesWithNestingDocument = gql`
    query NotesWithNesting {
  notesWithNesting {
    ...note
  }
}
    ${NoteFragmentDoc}`;

/**
 * __useNotesWithNestingQuery__
 *
 * To run a query within a React component, call `useNotesWithNestingQuery` and pass it any options that fit your needs.
 * When your component renders, `useNotesWithNestingQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNotesWithNestingQuery({
 *   variables: {
 *   },
 * });
 */
export function useNotesWithNestingQuery(baseOptions?: Apollo.QueryHookOptions<NotesWithNestingQuery, NotesWithNestingQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<NotesWithNestingQuery, NotesWithNestingQueryVariables>(NotesWithNestingDocument, options);
      }
export function useNotesWithNestingLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<NotesWithNestingQuery, NotesWithNestingQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<NotesWithNestingQuery, NotesWithNestingQueryVariables>(NotesWithNestingDocument, options);
        }
export type NotesWithNestingQueryHookResult = ReturnType<typeof useNotesWithNestingQuery>;
export type NotesWithNestingLazyQueryHookResult = ReturnType<typeof useNotesWithNestingLazyQuery>;
export type NotesWithNestingQueryResult = Apollo.QueryResult<NotesWithNestingQuery, NotesWithNestingQueryVariables>;