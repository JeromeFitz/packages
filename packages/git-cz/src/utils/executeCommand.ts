import { spawn } from 'child_process'

const executeCommand = (command, env = process.env) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  const proc = spawn(command, [], {
    env,
    shell: true,
    stdio: [0, 1, 2],
  })

  proc.on('close', (code) => {
    // Argument of type 'number | null' is not assignable to parameter of type 'number | undefined'.
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    process.exit(code)
  })
}

export default executeCommand
