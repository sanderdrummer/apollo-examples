const config = {
  projects: {
    'notes-frontend': {
      schema: './packages/notes-graphql/src/schema.graphql',
      documents: [
        './packages/notes-frontend/src/**/*.tsx',
        '!./packages/notes-frontend/src/gql/**/*',
      ],
      extensions: {
        codegen: {
          generates: {
            './packages/notes-frontend/src/gql/': {
              preset: 'client',
              plugins: [],
              presetConfig: {
                fragmentMasking: { unmaskFunctionName: 'getFragmentData' },
              },
            },
          },
        },
      },
    },
  },
}

export default config
