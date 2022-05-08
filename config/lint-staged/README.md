# @jeromefitz/lint-staged

Custom `lint-staged` setup that can be extended and incorporates:

- `lint-staged`

## lint-staged.config

```sh
import config from '@jeromefitz/lint-staged'

export default config
```

## What It Do

Pre-commit check against files for:

- `eslint`
- `prettier`

And re-add if any updates were applied on auto-fix.
