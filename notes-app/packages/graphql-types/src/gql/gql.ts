/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  query avatarList {\n    notesWithNesting {\n      id\n      avatar {\n        ...avatar\n      }\n    }\n  }\n": types.AvatarListDocument,
    "\n  fragment avatar on Avatar {\n    id\n    url\n    name\n  }\n": types.AvatarFragmentDoc,
    "\n  fragment NoteItem on NoteWithNesting {\n    id\n    text\n    avatar {\n      ...avatar\n    }\n    User {\n      id\n      firstName\n      lastName\n    }\n    NoteDetails {\n      id\n      headline\n      subheadline\n      details\n    }\n  }\n": types.NoteItemFragmentDoc,
    "\n    query NotesWithNesting {\n      notesWithNesting {\n        id\n        ...NoteItem\n      }\n    }\n  ": types.NotesWithNestingDocument,
    "\n  fragment NoteFormFragment on Note {\n    created\n    id\n    text\n  }\n": types.NoteFormFragmentFragmentDoc,
    "\n  mutation saveNote($note: NoteInput!) {\n    saveNote(note: $note) {\n      ...NoteFormFragment\n    }\n  }\n": types.SaveNoteDocument,
    "\n  query noteById($id: ID!) {\n    noteById(id: $id) {\n      ...NoteFormFragment\n    }\n  }\n": types.NoteByIdDocument,
    "\n  fragment NoteFragment on Note {\n    id\n    text\n    created\n  }\n": types.NoteFragmentFragmentDoc,
    "\n  query notes {\n    notes {\n      id\n      ...NoteFragment\n    }\n  }\n": types.NotesDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query avatarList {\n    notesWithNesting {\n      id\n      avatar {\n        ...avatar\n      }\n    }\n  }\n"): (typeof documents)["\n  query avatarList {\n    notesWithNesting {\n      id\n      avatar {\n        ...avatar\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment avatar on Avatar {\n    id\n    url\n    name\n  }\n"): (typeof documents)["\n  fragment avatar on Avatar {\n    id\n    url\n    name\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment NoteItem on NoteWithNesting {\n    id\n    text\n    avatar {\n      ...avatar\n    }\n    User {\n      id\n      firstName\n      lastName\n    }\n    NoteDetails {\n      id\n      headline\n      subheadline\n      details\n    }\n  }\n"): (typeof documents)["\n  fragment NoteItem on NoteWithNesting {\n    id\n    text\n    avatar {\n      ...avatar\n    }\n    User {\n      id\n      firstName\n      lastName\n    }\n    NoteDetails {\n      id\n      headline\n      subheadline\n      details\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query NotesWithNesting {\n      notesWithNesting {\n        id\n        ...NoteItem\n      }\n    }\n  "): (typeof documents)["\n    query NotesWithNesting {\n      notesWithNesting {\n        id\n        ...NoteItem\n      }\n    }\n  "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment NoteFormFragment on Note {\n    created\n    id\n    text\n  }\n"): (typeof documents)["\n  fragment NoteFormFragment on Note {\n    created\n    id\n    text\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation saveNote($note: NoteInput!) {\n    saveNote(note: $note) {\n      ...NoteFormFragment\n    }\n  }\n"): (typeof documents)["\n  mutation saveNote($note: NoteInput!) {\n    saveNote(note: $note) {\n      ...NoteFormFragment\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query noteById($id: ID!) {\n    noteById(id: $id) {\n      ...NoteFormFragment\n    }\n  }\n"): (typeof documents)["\n  query noteById($id: ID!) {\n    noteById(id: $id) {\n      ...NoteFormFragment\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment NoteFragment on Note {\n    id\n    text\n    created\n  }\n"): (typeof documents)["\n  fragment NoteFragment on Note {\n    id\n    text\n    created\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query notes {\n    notes {\n      id\n      ...NoteFragment\n    }\n  }\n"): (typeof documents)["\n  query notes {\n    notes {\n      id\n      ...NoteFragment\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;