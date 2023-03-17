import { CodegenExecutorSchema } from './schema'
import execa = require('execa')
export default async function runExecutor(options: CodegenExecutorSchema) {
  const commands = [
    'codegen',
    '--config',
    'projects-codegen.ts',
    '--project',
    options.project,
  ]

  if (options.watch) {
    commands.push('--watch')
  }

  const { stdout, stderr } = await execa('pnpm', commands)
  console.log(stdout)
  console.error(stderr)
}
