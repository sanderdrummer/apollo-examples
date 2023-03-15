/* eslint-disable */
import * as Types from '@notes-app/graphql-types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type NotesQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type NotesQuery = { __typename?: 'Query', notes?: Array<{ __typename?: 'Note', id: string, text: string, created: string } | null> | null };

export type NoteByIdQueryVariables = Types.Exact<{
  id: Types.Scalars['ID'];
}>;


export type NoteByIdQuery = { __typename?: 'Query', noteById: { __typename?: 'Note', id: string, text: string, created: string } };

export type SaveNoteMutationVariables = Types.Exact<{
  note: Types.NoteInput;
}>;


export type SaveNoteMutation = { __typename?: 'Mutation', saveNote: { __typename?: 'Note', created: string, id: string, text: string } };


export const NotesDocument = gql`
    query notes {
  notes {
    id
    text
    created
  }
}
    `;

/**
 * __useNotesQuery__
 *
 * To run a query within a React component, call `useNotesQuery` and pass it any options that fit your needs.
 * When your component renders, `useNotesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNotesQuery({
 *   variables: {
 *   },
 * });
 */
export function useNotesQuery(baseOptions?: Apollo.QueryHookOptions<NotesQuery, NotesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<NotesQuery, NotesQueryVariables>(NotesDocument, options);
      }
export function useNotesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<NotesQuery, NotesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<NotesQuery, NotesQueryVariables>(NotesDocument, options);
        }
export type NotesQueryHookResult = ReturnType<typeof useNotesQuery>;
export type NotesLazyQueryHookResult = ReturnType<typeof useNotesLazyQuery>;
export type NotesQueryResult = Apollo.QueryResult<NotesQuery, NotesQueryVariables>;
export const NoteByIdDocument = gql`
    query noteById($id: ID!) {
  noteById(id: $id) {
    id
    text
    created
  }
}
    `;

/**
 * __useNoteByIdQuery__
 *
 * To run a query within a React component, call `useNoteByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useNoteByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNoteByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useNoteByIdQuery(baseOptions: Apollo.QueryHookOptions<NoteByIdQuery, NoteByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<NoteByIdQuery, NoteByIdQueryVariables>(NoteByIdDocument, options);
      }
export function useNoteByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<NoteByIdQuery, NoteByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<NoteByIdQuery, NoteByIdQueryVariables>(NoteByIdDocument, options);
        }
export type NoteByIdQueryHookResult = ReturnType<typeof useNoteByIdQuery>;
export type NoteByIdLazyQueryHookResult = ReturnType<typeof useNoteByIdLazyQuery>;
export type NoteByIdQueryResult = Apollo.QueryResult<NoteByIdQuery, NoteByIdQueryVariables>;
export const SaveNoteDocument = gql`
    mutation saveNote($note: NoteInput!) {
  saveNote(note: $note) {
    created
    id
    text
  }
}
    `;
export type SaveNoteMutationFn = Apollo.MutationFunction<SaveNoteMutation, SaveNoteMutationVariables>;

/**
 * __useSaveNoteMutation__
 *
 * To run a mutation, you first call `useSaveNoteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSaveNoteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [saveNoteMutation, { data, loading, error }] = useSaveNoteMutation({
 *   variables: {
 *      note: // value for 'note'
 *   },
 * });
 */
export function useSaveNoteMutation(baseOptions?: Apollo.MutationHookOptions<SaveNoteMutation, SaveNoteMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SaveNoteMutation, SaveNoteMutationVariables>(SaveNoteDocument, options);
      }
export type SaveNoteMutationHookResult = ReturnType<typeof useSaveNoteMutation>;
export type SaveNoteMutationResult = Apollo.MutationResult<SaveNoteMutation>;
export type SaveNoteMutationOptions = Apollo.BaseMutationOptions<SaveNoteMutation, SaveNoteMutationVariables>;