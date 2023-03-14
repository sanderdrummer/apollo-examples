/* eslint-disable */
import * as Types from '@notes-app/graphql-types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type NotesWithoutIdQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type NotesWithoutIdQuery = { __typename?: 'Query', notesWithoutId?: Array<{ __typename?: 'Note', text: string, created: string } | null> | null };


export const NotesWithoutIdDocument = gql`
    query notesWithoutId {
  notesWithoutId {
    text
    created
  }
}
    `;

/**
 * __useNotesWithoutIdQuery__
 *
 * To run a query within a React component, call `useNotesWithoutIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useNotesWithoutIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNotesWithoutIdQuery({
 *   variables: {
 *   },
 * });
 */
export function useNotesWithoutIdQuery(baseOptions?: Apollo.QueryHookOptions<NotesWithoutIdQuery, NotesWithoutIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<NotesWithoutIdQuery, NotesWithoutIdQueryVariables>(NotesWithoutIdDocument, options);
      }
export function useNotesWithoutIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<NotesWithoutIdQuery, NotesWithoutIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<NotesWithoutIdQuery, NotesWithoutIdQueryVariables>(NotesWithoutIdDocument, options);
        }
export type NotesWithoutIdQueryHookResult = ReturnType<typeof useNotesWithoutIdQuery>;
export type NotesWithoutIdLazyQueryHookResult = ReturnType<typeof useNotesWithoutIdLazyQuery>;
export type NotesWithoutIdQueryResult = Apollo.QueryResult<NotesWithoutIdQuery, NotesWithoutIdQueryVariables>;