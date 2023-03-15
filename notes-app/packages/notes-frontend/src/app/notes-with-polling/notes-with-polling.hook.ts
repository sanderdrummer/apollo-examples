/* eslint-disable */
import * as Types from '@notes-app/graphql-types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type NotesForPollingQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type NotesForPollingQuery = { __typename?: 'Query', notesForPolling?: Array<{ __typename?: 'NotesForPolling', pollingText: string, id: string } | null> | null };


export const NotesForPollingDocument = gql`
    query NotesForPolling {
  notesForPolling {
    pollingText
    id
  }
}
    `;

/**
 * __useNotesForPollingQuery__
 *
 * To run a query within a React component, call `useNotesForPollingQuery` and pass it any options that fit your needs.
 * When your component renders, `useNotesForPollingQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNotesForPollingQuery({
 *   variables: {
 *   },
 * });
 */
export function useNotesForPollingQuery(baseOptions?: Apollo.QueryHookOptions<NotesForPollingQuery, NotesForPollingQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<NotesForPollingQuery, NotesForPollingQueryVariables>(NotesForPollingDocument, options);
      }
export function useNotesForPollingLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<NotesForPollingQuery, NotesForPollingQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<NotesForPollingQuery, NotesForPollingQueryVariables>(NotesForPollingDocument, options);
        }
export type NotesForPollingQueryHookResult = ReturnType<typeof useNotesForPollingQuery>;
export type NotesForPollingLazyQueryHookResult = ReturnType<typeof useNotesForPollingLazyQuery>;
export type NotesForPollingQueryResult = Apollo.QueryResult<NotesForPollingQuery, NotesForPollingQueryVariables>;