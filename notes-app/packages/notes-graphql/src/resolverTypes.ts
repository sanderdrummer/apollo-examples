/* eslint-disable */
import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
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

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;


/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Avatar: ResolverTypeWrapper<Avatar>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Mutation: ResolverTypeWrapper<{}>;
  Note: ResolverTypeWrapper<Note>;
  NoteDetails: ResolverTypeWrapper<NoteDetails>;
  NoteInput: NoteInput;
  NoteWithNesting: ResolverTypeWrapper<NoteWithNesting>;
  NoteWithoutId: ResolverTypeWrapper<NoteWithoutId>;
  NoteWithoutIdInput: NoteWithoutIdInput;
  NotesForPolling: ResolverTypeWrapper<NotesForPolling>;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']>;
  User: ResolverTypeWrapper<User>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Avatar: Avatar;
  Boolean: Scalars['Boolean'];
  ID: Scalars['ID'];
  Mutation: {};
  Note: Note;
  NoteDetails: NoteDetails;
  NoteInput: NoteInput;
  NoteWithNesting: NoteWithNesting;
  NoteWithoutId: NoteWithoutId;
  NoteWithoutIdInput: NoteWithoutIdInput;
  NotesForPolling: NotesForPolling;
  Query: {};
  String: Scalars['String'];
  User: User;
}>;

export type AvatarResolvers<ContextType = any, ParentType extends ResolversParentTypes['Avatar'] = ResolversParentTypes['Avatar']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  saveNote?: Resolver<ResolversTypes['Note'], ParentType, ContextType, RequireFields<MutationSaveNoteArgs, 'note'>>;
  saveNoteWithoutId?: Resolver<ResolversTypes['NoteWithoutId'], ParentType, ContextType, Partial<MutationSaveNoteWithoutIdArgs>>;
}>;

export type NoteResolvers<ContextType = any, ParentType extends ResolversParentTypes['Note'] = ResolversParentTypes['Note']> = ResolversObject<{
  created?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  text?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type NoteDetailsResolvers<ContextType = any, ParentType extends ResolversParentTypes['NoteDetails'] = ResolversParentTypes['NoteDetails']> = ResolversObject<{
  details?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  headline?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  subheadline?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type NoteWithNestingResolvers<ContextType = any, ParentType extends ResolversParentTypes['NoteWithNesting'] = ResolversParentTypes['NoteWithNesting']> = ResolversObject<{
  NoteDetails?: Resolver<Array<ResolversTypes['NoteDetails']>, ParentType, ContextType>;
  User?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  avatar?: Resolver<ResolversTypes['Avatar'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  text?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type NoteWithoutIdResolvers<ContextType = any, ParentType extends ResolversParentTypes['NoteWithoutId'] = ResolversParentTypes['NoteWithoutId']> = ResolversObject<{
  created?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  text?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type NotesForPollingResolvers<ContextType = any, ParentType extends ResolversParentTypes['NotesForPolling'] = ResolversParentTypes['NotesForPolling']> = ResolversObject<{
  created?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  pollingText?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  noteById?: Resolver<ResolversTypes['Note'], ParentType, ContextType, RequireFields<QueryNoteByIdArgs, 'id'>>;
  noteWithoutId?: Resolver<Maybe<ResolversTypes['NoteWithoutId']>, ParentType, ContextType>;
  notes?: Resolver<Maybe<Array<Maybe<ResolversTypes['Note']>>>, ParentType, ContextType>;
  notesForPolling?: Resolver<Maybe<Array<Maybe<ResolversTypes['NotesForPolling']>>>, ParentType, ContextType>;
  notesWithNesting?: Resolver<Array<ResolversTypes['NoteWithNesting']>, ParentType, ContextType>;
}>;

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = ResolversObject<{
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = any> = ResolversObject<{
  Avatar?: AvatarResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Note?: NoteResolvers<ContextType>;
  NoteDetails?: NoteDetailsResolvers<ContextType>;
  NoteWithNesting?: NoteWithNestingResolvers<ContextType>;
  NoteWithoutId?: NoteWithoutIdResolvers<ContextType>;
  NotesForPolling?: NotesForPollingResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
}>;

