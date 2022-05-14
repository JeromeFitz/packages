# @jeromefitz/codestyle

## Deprecated

Last working version is `@jeromefitz/codestyle@8.0.28`

It still will work, and you can move to the new package system as the continuation to more focused packages for improved opt-in performance takes place.

## Now What?

Instead of one larger wrapper for:

- `eslint`
- `lint-staged`
- `prettier`
- `tsconfig`

They have been broken down into individual packages for plug-n-play:

- [`@jeromefitz/eslint-config`](../../config/tsconfig)
  - Note: For ESLint purposes this handles: `jest|next|prettier|...`
- [`@jeromefitz/lint-staged`](../../config/tsconfig)
- [`@jeromefitz/prettier-config`](../../config/tsconfig)
- [`@jeromefitz/tsconfig`](../../config/tsconfig)
  - Note: Creates Base TSConfig and Multipe Variations
