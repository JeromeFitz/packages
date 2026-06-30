# @jeromefitz/prettier-config

> [!IMPORTANT]
>
> No further development. Slated for removal from codebase.

This package is now a wrapper for `prettier-plugin-pkg` basically.

## Migration

`prettier-plugin-tailwindcss` => [useSortedClasses](https://biomejs.dev/linter/rules/use-sorted-classes/#description)

`.prettierignore`:

```bash
# migrating to biome

**!package.json
!**/package.json

```

## Usage

```ts
import config from "@jeromefitz/prettier-config";

export default config;
```
