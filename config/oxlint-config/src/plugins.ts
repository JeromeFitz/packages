type LintPluginOptionsSchema =
  | "eslint"
  | "react"
  | "unicorn"
  | "typescript"
  | "oxc"
  | "import"
  | "jsdoc"
  | "jest"
  | "vitest"
  | "jsx-a11y"
  | "nextjs"
  | "react-perf"
  | "promise"
  | "node"
  | "vue";

const plugins: LintPluginOptionsSchema[] = [
  // default
  "eslint",
  "typescript",
  "unicorn",
  "oxc",

  // available
  "import",
  "jsx-a11y",
  "nextjs",
  "node",
  "promise",
  "react-perf",
  "react",
];

export { plugins };
