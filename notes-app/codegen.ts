import { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  schema: './packages/graphql-schema/src/schema.graphql',
  generates: {
    './packages/graphql-schema/src/types.ts': {
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
      ],
    },
    './packages/notes-graphql/src/resolverTypes.ts': {
      config: {
        strictScalars: true,
        useIndexSignature: true,
        scalars: {
          DateTime: 'string',
        },
        typesFile: '@notes-app/graphql-schema',
      },
      plugins: [
        {
          add: {
            content: '/* eslint-disable */',
          },
        },
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
        {
          'typescript-mock-data': {
            scalars: {
              DateTime: "'2023-02-01T15:45:48.925248Z'",
            },
            typesFile: '@notes-app/graphql-schema',
          },
        },
      ],
    },
  },
}

export default config
