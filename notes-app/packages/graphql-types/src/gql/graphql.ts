/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Avatar = {
  __typename?: 'Avatar';
  id: Scalars['ID'];
  name: Scalars['String'];
  url: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  saveNote: Note;
  saveNoteWithoutId: NoteWithoutId;
};


export type MutationSaveNoteArgs = {
  note: NoteInput;
};


export type MutationSaveNoteWithoutIdArgs = {
  note?: InputMaybe<NoteWithoutIdInput>;
};

export type Note = {
  __typename?: 'Note';
  created: Scalars['String'];
  id: Scalars['ID'];
  text: Scalars['String'];
};

export type NoteDetails = {
  __typename?: 'NoteDetails';
  details: Scalars['String'];
  headline: Scalars['String'];
  id: Scalars['ID'];
  subheadline: Scalars['String'];
};

export type NoteInput = {
  created: Scalars['String'];
  id?: InputMaybe<Scalars['ID']>;
  text: Scalars['String'];
};

export type NoteWithNesting = {
  __typename?: 'NoteWithNesting';
  NoteDetails: Array<NoteDetails>;
  User: User;
  avatar: Avatar;
  id: Scalars['ID'];
  text: Scalars['String'];
};

export type NoteWithoutId = {
  __typename?: 'NoteWithoutId';
  created: Scalars['String'];
  text: Scalars['String'];
};

export type NoteWithoutIdInput = {
  created: Scalars['String'];
  text: Scalars['String'];
};

export type NotesForPolling = {
  __typename?: 'NotesForPolling';
  created: Scalars['String'];
  id: Scalars['ID'];
  pollingText: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  noteById: Note;
  noteWithoutId?: Maybe<NoteWithoutId>;
  notes?: Maybe<Array<Maybe<Note>>>;
  notesForPolling?: Maybe<Array<Maybe<NotesForPolling>>>;
  notesWithNesting: Array<NoteWithNesting>;
};


export type QueryNoteByIdArgs = {
  id: Scalars['ID'];
};

export type User = {
  __typename?: 'User';
  firstName: Scalars['String'];
  id: Scalars['ID'];
  lastName: Scalars['String'];
};

export type AvatarListQueryVariables = Exact<{ [key: string]: never; }>;


export type AvatarListQuery = { __typename?: 'Query', notesWithNesting: Array<{ __typename?: 'NoteWithNesting', id: string, avatar: (
      { __typename?: 'Avatar' }
      & { ' $fragmentRefs'?: { 'AvatarFragment': AvatarFragment } }
    ) }> };

export type AvatarFragment = { __typename?: 'Avatar', id: string, url: string, name: string } & { ' $fragmentName'?: 'AvatarFragment' };

export type NoteItemFragment = { __typename?: 'NoteWithNesting', id: string, text: string, avatar: (
    { __typename?: 'Avatar' }
    & { ' $fragmentRefs'?: { 'AvatarFragment': AvatarFragment } }
  ), User: { __typename?: 'User', id: string, firstName: string, lastName: string }, NoteDetails: Array<{ __typename?: 'NoteDetails', id: string, headline: string, subheadline: string, details: string }> } & { ' $fragmentName'?: 'NoteItemFragment' };

export type NotesWithNestingQueryVariables = Exact<{ [key: string]: never; }>;


export type NotesWithNestingQuery = { __typename?: 'Query', notesWithNesting: Array<(
    { __typename?: 'NoteWithNesting', id: string }
    & { ' $fragmentRefs'?: { 'NoteItemFragment': NoteItemFragment } }
  )> };

export type NoteFormFragmentFragment = { __typename?: 'Note', created: string, id: string, text: string } & { ' $fragmentName'?: 'NoteFormFragmentFragment' };

export type SaveNoteMutationVariables = Exact<{
  note: NoteInput;
}>;


export type SaveNoteMutation = { __typename?: 'Mutation', saveNote: { __typename?: 'Note', created: string, id: string, text: string } };

export type NoteByIdQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type NoteByIdQuery = { __typename?: 'Query', noteById: { __typename?: 'Note', created: string, id: string, text: string } };

export type NoteFragmentFragment = { __typename?: 'Note', id: string, text: string, created: string } & { ' $fragmentName'?: 'NoteFragmentFragment' };

export type NotesQueryVariables = Exact<{ [key: string]: never; }>;


export type NotesQuery = { __typename?: 'Query', notes?: Array<(
    { __typename?: 'Note', id: string }
    & { ' $fragmentRefs'?: { 'NoteFragmentFragment': NoteFragmentFragment } }
  ) | null> | null };

export const AvatarFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"avatar"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Avatar"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]} as unknown as DocumentNode<AvatarFragment, unknown>;
export const NoteItemFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NoteItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"NoteWithNesting"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"avatar"}}]}},{"kind":"Field","name":{"kind":"Name","value":"User"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}}]}},{"kind":"Field","name":{"kind":"Name","value":"NoteDetails"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"headline"}},{"kind":"Field","name":{"kind":"Name","value":"subheadline"}},{"kind":"Field","name":{"kind":"Name","value":"details"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"avatar"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Avatar"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]} as unknown as DocumentNode<NoteItemFragment, unknown>;
export const NoteFormFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NoteFormFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Note"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"created"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"text"}}]}}]} as unknown as DocumentNode<NoteFormFragmentFragment, unknown>;
export const NoteFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NoteFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Note"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"created"}}]}}]} as unknown as DocumentNode<NoteFragmentFragment, unknown>;
export const AvatarListDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"avatarList"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"notesWithNesting"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"avatar"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"avatar"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Avatar"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]} as unknown as DocumentNode<AvatarListQuery, AvatarListQueryVariables>;
export const NotesWithNestingDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"NotesWithNesting"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"notesWithNesting"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"NoteItem"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"avatar"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Avatar"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NoteItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"NoteWithNesting"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"avatar"}}]}},{"kind":"Field","name":{"kind":"Name","value":"User"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}}]}},{"kind":"Field","name":{"kind":"Name","value":"NoteDetails"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"headline"}},{"kind":"Field","name":{"kind":"Name","value":"subheadline"}},{"kind":"Field","name":{"kind":"Name","value":"details"}}]}}]}}]} as unknown as DocumentNode<NotesWithNestingQuery, NotesWithNestingQueryVariables>;
export const SaveNoteDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"saveNote"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"note"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"NoteInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"saveNote"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"note"},"value":{"kind":"Variable","name":{"kind":"Name","value":"note"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"created"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"text"}}]}}]}}]} as unknown as DocumentNode<SaveNoteMutation, SaveNoteMutationVariables>;
export const NoteByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"noteById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"noteById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"created"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"text"}}]}}]}}]} as unknown as DocumentNode<NoteByIdQuery, NoteByIdQueryVariables>;
export const NotesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"notes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"notes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"NoteFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NoteFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Note"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"created"}}]}}]} as unknown as DocumentNode<NotesQuery, NotesQueryVariables>;