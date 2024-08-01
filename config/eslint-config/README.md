# @jeromefitz/eslint-config

Custom `eslint-config` setup that can be extended and incorporates:

- `@babel/eslint-parser`
- `@eslint/*`
- `eslint`
- `eslint-config-next`
- `eslint-config-prettier`
- `eslint-plugin-import-x`
- `eslint-plugin-jest`
- `eslint-plugin-jsx-a11y`
- `eslint-plugin-react`
- `eslint-plugin-react-hooks`
- `prettier`
- `typescript-eslint`

## Breakdown

- `./index` (base)
- `./typescript`
- `./react` (+ typescript)
  - `./jest` (+ react)
  - `./next` (+ react)
    - `./tailwind` (+ next)

```sh
pnpm add @jeromefitz/eslint-config --save-dev
```

### Base

```ts
import { configBase } from '@jeromefitz/eslint-config/base.js'

// ...

const config = [...configBase]
```

### Jest

```js
import { configJest } from '@jeromefitz/eslint-config/jest.js'

// ...

const config = [...configJest]
```

### Next

```js
import { configNext } from '@jeromefitz/eslint-config/next.js'

// ...

const config = [...configNext]
```

### React

```js
import { configReact } from '@jeromefitz/eslint-config/react.js'

// ...

const config = [...configReact]
```

### Tailwind

```js
import { configTailwind } from '@jeromefitz/eslint-config/tailwind.js'

// ...

const config = [...configTailwind]
```

### Typescript

```js
import { configTypescript } from '@jeromefitz/eslint-config/typescript.js'

// ...

const config = [...configTypescript]
```

## Please Note

The eslint ecosystem will slowly (but surely) move from `eslint@8` to `eslint@9`.

`@jeromefitz/eslint-config@4` will be a holding pattern and may from time-to-time introduce potential **breaking** changes in linting. This is done so we do not have to bump a major _every_ single time we upgrade package(s) from `eslint@8` => `eslint@9`.

In some regards this should be permanent `canary` until then, but will try to call out any breaking in PRs as we move forward.

> **📝 Note:** See #1511 for more information.
