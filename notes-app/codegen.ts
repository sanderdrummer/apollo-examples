import { CodegenConfig } from '@graphql-codegen/cli'

const scalars = {
  DateTime: 'string',
}
const config: CodegenConfig = {
  schema: './packages/notes-graphql/src/schema.graphql',
  ignoreNoDocuments: true,
  generates: {
    './packages/notes-graphql/src/resolverTypes.ts': {
      config: {
        strictScalars: true,
        useIndexSignature: true,
        scalars,
      },
      plugins: [
        {
          add: {
            content: '/* eslint-disable */',
          },
        },
        'typescript',
        'typescript-resolvers',
      ],
    },
    './packages/graphql-types/src/generated.ts': {
      config: {
        strictScalars: true,
        useIndexSignature: true,
        scalars,
      },
      plugins: [
        {
          add: {
            content: '/* eslint-disable */',
          },
        },
        'typescript',
      ],
    },
    './packages/graphql-mocks/src/generated.ts': {
      config: {
        strictScalars: true,
        useIndexSignature: true,
      },
      plugins: [
        'typescript',
        {
          add: {
            content: '/* eslint-disable */',
          },
        },
        {
          'typescript-mock-data': {
            dynamicValues: true,
          },
        },
      ],
    },
    './packages/graphql-types/src/gql/': {
      documents: ['./packages/**/*.tsx'],
      preset: 'client',
    },
    './packages/notes-frontend/src/generated': {
      documents: ['./packages/notes-frontend/**/*.graphql'],
      preset: 'near-operation-file',
      presetConfig: {
        extension: '.hook.ts',
        baseTypesPath: '~@notes-app/graphql-types',
      },
      config: {
        scalars,
        reactApolloVersion: 3,
        withHooks: true,
        withComponent: false,
        withHOC: false,
      },
      plugins: [
        {
          add: {
            content: `/* eslint-disable */`,
          },
        },
        'typescript-operations',
        'typescript-react-apollo',
      ],
    },
  },
}

export default config
