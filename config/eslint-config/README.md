# Deprecated: @jeromefitz/eslint-config

> [!IMPORTANT]
>
> There will be no further development and will eventually be removed from codebase.

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
- `eslint-plugin-storybook`
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
