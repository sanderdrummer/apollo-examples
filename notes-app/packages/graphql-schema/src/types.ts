/* eslint-disable */
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  /** ISO-8601 DateTime */
  DateTime: string
}

export type DateRange = {
  __typename?: 'DateRange'
  from?: Maybe<Scalars['DateTime']>
  to?: Maybe<Scalars['DateTime']>
}

export type Note = {
  __typename?: 'Note'
  created: Scalars['DateTime']
  id: Scalars['ID']
  text: Scalars['String']
}

export type Query = {
  __typename?: 'Query'
  notes: Array<Note>
}

export type QueryNotesArgs = {
  input?: InputMaybe<QueryNotesInput>
}

export type QueryNotesInput = {
  __typename?: 'QueryNotesInput'
  created?: Maybe<DateRange>
}
