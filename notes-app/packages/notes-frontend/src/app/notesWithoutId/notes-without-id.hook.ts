/* eslint-disable */
import * as Types from '@notes-app/graphql-types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type NoteWithoutIdQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type NoteWithoutIdQuery = { __typename?: 'Query', noteWithoutId?: { __typename?: 'NoteWithoutId', text: string, created: string } | null };

export type SaveNoteWithoutIdMutationVariables = Types.Exact<{
  note: Types.NoteWithoutIdInput;
}>;


export type SaveNoteWithoutIdMutation = { __typename?: 'Mutation', saveNoteWithoutId: { __typename?: 'NoteWithoutId', created: string, text: string } };


export const NoteWithoutIdDocument = gql`
    query noteWithoutId {
  noteWithoutId {
    text
    created
  }
}
    `;

/**
 * __useNoteWithoutIdQuery__
 *
 * To run a query within a React component, call `useNoteWithoutIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useNoteWithoutIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNoteWithoutIdQuery({
 *   variables: {
 *   },
 * });
 */
export function useNoteWithoutIdQuery(baseOptions?: Apollo.QueryHookOptions<NoteWithoutIdQuery, NoteWithoutIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<NoteWithoutIdQuery, NoteWithoutIdQueryVariables>(NoteWithoutIdDocument, options);
      }
export function useNoteWithoutIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<NoteWithoutIdQuery, NoteWithoutIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<NoteWithoutIdQuery, NoteWithoutIdQueryVariables>(NoteWithoutIdDocument, options);
        }
export type NoteWithoutIdQueryHookResult = ReturnType<typeof useNoteWithoutIdQuery>;
export type NoteWithoutIdLazyQueryHookResult = ReturnType<typeof useNoteWithoutIdLazyQuery>;
export type NoteWithoutIdQueryResult = Apollo.QueryResult<NoteWithoutIdQuery, NoteWithoutIdQueryVariables>;
export const SaveNoteWithoutIdDocument = gql`
    mutation saveNoteWithoutId($note: NoteWithoutIdInput!) {
  saveNoteWithoutId(note: $note) {
    created
    text
  }
}
    `;
export type SaveNoteWithoutIdMutationFn = Apollo.MutationFunction<SaveNoteWithoutIdMutation, SaveNoteWithoutIdMutationVariables>;

/**
 * __useSaveNoteWithoutIdMutation__
 *
 * To run a mutation, you first call `useSaveNoteWithoutIdMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSaveNoteWithoutIdMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [saveNoteWithoutIdMutation, { data, loading, error }] = useSaveNoteWithoutIdMutation({
 *   variables: {
 *      note: // value for 'note'
 *   },
 * });
 */
export function useSaveNoteWithoutIdMutation(baseOptions?: Apollo.MutationHookOptions<SaveNoteWithoutIdMutation, SaveNoteWithoutIdMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SaveNoteWithoutIdMutation, SaveNoteWithoutIdMutationVariables>(SaveNoteWithoutIdDocument, options);
      }
export type SaveNoteWithoutIdMutationHookResult = ReturnType<typeof useSaveNoteWithoutIdMutation>;
export type SaveNoteWithoutIdMutationResult = Apollo.MutationResult<SaveNoteWithoutIdMutation>;
export type SaveNoteWithoutIdMutationOptions = Apollo.BaseMutationOptions<SaveNoteWithoutIdMutation, SaveNoteWithoutIdMutationVariables>;