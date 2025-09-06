/** biome-ignore-all lint/suspicious/noConsole: migrate */
import colors from 'ansi-colors'

const printDryRun = (v) => {
  console.log(colors.magenta.bold(`❯ dry-run mode: ${v}\n`))
}

export { printDryRun }
