# @jeromefitz/lint-staged

Custom `lint-staged` setup that can be extended and incorporates:

- `lint-staged`

Since `node@22.6.0` you can call [`.ts` directly now](https://github.com/lint-staged/lint-staged?tab=readme-ov-file#typescript). Until `node@24` you will want to set the following `NODE_OPTIONS`:

```bash
▲ export NODE_OPTIONS="--disable-warning=ExperimentalWarning"
▲ export NODE_OPTIONS="--experimental-strip-types"
```

With `pnpm` you can do that via the `pnpm-workspace.yaml`:

```yaml
nodeOptions: '--experimental-strip-types --disable-warning=ExperimentalWarning'
```

## lint-staged.config

```ts
import config from '@jeromefitz/lint-staged'

export default config
```

## What It Do

Pre-commit check against files for:

- `eslint`
- `prettier`

And re-add if any updates were applied on auto-fix.

## Git Hooks

Since `lint-staged@12` passing the direct _built_ configuration file locally to this monorepo has helped. But you _should_ be able to call .
