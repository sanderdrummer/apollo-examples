/* eslint-disable */
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

export type Note = {
  __typename?: 'Note';
  created: Scalars['String'];
  id: Scalars['ID'];
  text: Scalars['String'];
};

export type NoteWithoutId = {
  __typename?: 'NoteWithoutId';
  created: Scalars['String'];
  text: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  notes?: Maybe<Array<Maybe<Note>>>;
  notesWithoutId?: Maybe<Array<Maybe<Note>>>;
};


export const aNote = (overrides?: Partial<Note>): Note => {
    return {
        created: overrides && overrides.hasOwnProperty('created') ? overrides.created! : 'tenetur',
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : '5c2614e8-326c-4713-9788-d2bb69d93ba5',
        text: overrides && overrides.hasOwnProperty('text') ? overrides.text! : 'dolorem',
    };
};

export const aNoteWithoutId = (overrides?: Partial<NoteWithoutId>): NoteWithoutId => {
    return {
        created: overrides && overrides.hasOwnProperty('created') ? overrides.created! : 'ipsum',
        text: overrides && overrides.hasOwnProperty('text') ? overrides.text! : 'sint',
    };
};

export const aQuery = (overrides?: Partial<Query>): Query => {
    return {
        notes: overrides && overrides.hasOwnProperty('notes') ? overrides.notes! : [aNote()],
        notesWithoutId: overrides && overrides.hasOwnProperty('notesWithoutId') ? overrides.notesWithoutId! : [aNote()],
    };
};
