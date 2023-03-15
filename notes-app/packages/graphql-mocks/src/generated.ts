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

import casual from 'casual';

casual.seed(0);

export const anAvatar = (overrides?: Partial<Avatar>): Avatar => {
    return {
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : casual.uuid,
        name: overrides && overrides.hasOwnProperty('name') ? overrides.name! : casual.word,
        url: overrides && overrides.hasOwnProperty('url') ? overrides.url! : casual.word,
    };
};

export const aMutation = (overrides?: Partial<Mutation>): Mutation => {
    return {
        saveNote: overrides && overrides.hasOwnProperty('saveNote') ? overrides.saveNote! : aNote(),
        saveNoteWithoutId: overrides && overrides.hasOwnProperty('saveNoteWithoutId') ? overrides.saveNoteWithoutId! : aNoteWithoutId(),
    };
};

export const aNote = (overrides?: Partial<Note>): Note => {
    return {
        created: overrides && overrides.hasOwnProperty('created') ? overrides.created! : casual.word,
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : casual.uuid,
        text: overrides && overrides.hasOwnProperty('text') ? overrides.text! : casual.word,
    };
};

export const aNoteDetails = (overrides?: Partial<NoteDetails>): NoteDetails => {
    return {
        details: overrides && overrides.hasOwnProperty('details') ? overrides.details! : casual.word,
        headline: overrides && overrides.hasOwnProperty('headline') ? overrides.headline! : casual.word,
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : casual.uuid,
        subheadline: overrides && overrides.hasOwnProperty('subheadline') ? overrides.subheadline! : casual.word,
    };
};

export const aNoteInput = (overrides?: Partial<NoteInput>): NoteInput => {
    return {
        created: overrides && overrides.hasOwnProperty('created') ? overrides.created! : casual.word,
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : casual.uuid,
        text: overrides && overrides.hasOwnProperty('text') ? overrides.text! : casual.word,
    };
};

export const aNoteWithNesting = (overrides?: Partial<NoteWithNesting>): NoteWithNesting => {
    return {
        NoteDetails: overrides && overrides.hasOwnProperty('NoteDetails') ? overrides.NoteDetails! : [aNoteDetails()],
        User: overrides && overrides.hasOwnProperty('User') ? overrides.User! : aUser(),
        avatar: overrides && overrides.hasOwnProperty('avatar') ? overrides.avatar! : anAvatar(),
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : casual.uuid,
        text: overrides && overrides.hasOwnProperty('text') ? overrides.text! : casual.word,
    };
};

export const aNoteWithoutId = (overrides?: Partial<NoteWithoutId>): NoteWithoutId => {
    return {
        created: overrides && overrides.hasOwnProperty('created') ? overrides.created! : casual.word,
        text: overrides && overrides.hasOwnProperty('text') ? overrides.text! : casual.word,
    };
};

export const aNoteWithoutIdInput = (overrides?: Partial<NoteWithoutIdInput>): NoteWithoutIdInput => {
    return {
        created: overrides && overrides.hasOwnProperty('created') ? overrides.created! : casual.word,
        text: overrides && overrides.hasOwnProperty('text') ? overrides.text! : casual.word,
    };
};

export const aNotesForPolling = (overrides?: Partial<NotesForPolling>): NotesForPolling => {
    return {
        created: overrides && overrides.hasOwnProperty('created') ? overrides.created! : casual.word,
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : casual.uuid,
        pollingText: overrides && overrides.hasOwnProperty('pollingText') ? overrides.pollingText! : casual.word,
    };
};

export const aQuery = (overrides?: Partial<Query>): Query => {
    return {
        noteById: overrides && overrides.hasOwnProperty('noteById') ? overrides.noteById! : aNote(),
        noteWithoutId: overrides && overrides.hasOwnProperty('noteWithoutId') ? overrides.noteWithoutId! : aNoteWithoutId(),
        notes: overrides && overrides.hasOwnProperty('notes') ? overrides.notes! : [aNote()],
        notesForPolling: overrides && overrides.hasOwnProperty('notesForPolling') ? overrides.notesForPolling! : [aNotesForPolling()],
        notesWithNesting: overrides && overrides.hasOwnProperty('notesWithNesting') ? overrides.notesWithNesting! : [aNoteWithNesting()],
    };
};

export const aUser = (overrides?: Partial<User>): User => {
    return {
        firstName: overrides && overrides.hasOwnProperty('firstName') ? overrides.firstName! : casual.word,
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : casual.uuid,
        lastName: overrides && overrides.hasOwnProperty('lastName') ? overrides.lastName! : casual.word,
    };
};

export const seedMocks = (seed: number) => casual.seed(seed);
