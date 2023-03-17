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
  },
}

export default config
