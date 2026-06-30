const ignorePatterns: string[] = [
  // testing
  "**/__mocks__/*",
  "**/__snapshots__/*",
  "**/__tests__/*",
  "**/.test-output/*",
  "**/playwright-report/*",
  "**/test-results/*",

  // compiled
  "**/dist/*",
  "**/node_modules/*",
  "dist/*",
  "node_modules/*",

  // build
  "**/tsdown.config.ts",
];

export { ignorePatterns };
