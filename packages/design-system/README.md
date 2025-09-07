# Deprecated: `@jeromefitz/design-system`

> [!IMPORTANT]
>
> There will be no further development and will eventually be removed from codebase.

## ⚠️ ⚠️ ⚠️ ⚠️ ⚠️

This is in the process of being deprecated and currently decoupled from the build system and `pnpm`.

## 📝 📝 📝 📝 📝

Design System for [`jeromefitzgerald.com`](https://jeromefitzgerald.com).

## Overview

```bash
pnpm install @jeromefitz/design-system

npm install @jeromefitz/design-system

yarn install @jeromefitz/design-system
```

Everything is lifted to the top-level. Probably need to look at tree-shaking a bit because of it. 😆

### Dependencies

Please install `peerDependencies` if you are using components that use:

- `@heroicons/react`
  - `Icon`
- `@radix-ui/react-icons`
  - `Icon`
- `cmdk`
  - `CommandMenu`
- `framer-motion`:
  - `CommandMenu`
  - `NavigationMenu`
  - `usePrefersReducedMotion`
  - `useRefScrollProgress`
- `next`
  - `CardSpotify`
  - `EmojiParser`
  - `HeroImage`

At the moment the `theme` system can only be overwritten, not "instead of" so should probably move this to `dependencies`:

- `@radix-ui/colors`

## Architecture

In the process of building out a `Storybook` to assist with seeing the Components visually (and crafting improved Documentation).

- `./components`: You guessed it
- `./custom`: Not ready for primetime Components
- `./hooks`: You guessed it again
- `./lib`: Theme & Tokens for Design System via Stitches
  - See `Configuration`

## Configuration

TODO

## Notion

If you are using `Notion` check out [`next-notion`](https://github.com/JeromeFitz/websites/tree/main/packages/next-notion) in [`@jeromefitz/websites`](https://github.com/JeromeFitz/websites) as that cannot be ported just yet to this monorepo.

However, it has the `Notion` components that you can use with (or without) this Design System. And in generally see how you can do that.

## Issues

- Very closely tied to `next` for some Components so please work on making this more agnostic.
- Breaking change in `3.6.0` if you use `kbar`. Was supposed to get picked up with the prerelease but did not.

## Props

- [`radix-ui/design-system`](https://github.com/radix-ui/design-system)
- [`stitches`](https://github.com/stitchesjs/stitches)
