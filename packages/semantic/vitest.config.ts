import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    coverage: {
      exclude: ["src/**/*.test.ts", "src/**/__snapshots__/**"],
      include: ["src/**/*.ts"],
      provider: "v8",
      reporter: ["text", "json-summary", "json"],
    },
    environment: "node",
    include: ["src/**/*.test.ts"],
  },
});
