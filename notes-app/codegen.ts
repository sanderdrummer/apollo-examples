import { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  schema: './packages/notes-graphql/src/schema.graphql',
  generates: {
    './packages/notes-graphql/src/resolverTypes.ts': {
      config: {
        strictScalars: true,
        useIndexSignature: true,
        scalars: {
          DateTime: 'string',
        },
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
        {
          add: {
            content: '/* eslint-disable */',
          },
        },
        'typescript',
        {
          'typescript-mock-data': {
            scalars: {
              DateTime: "'2023-02-01T15:45:48.925248Z'",
            },
          },
        },
      ],
    },
  },
}

export default config
