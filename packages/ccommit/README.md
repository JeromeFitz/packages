# 😜 ➕ 👔 🟰 `ccommit`

`ccommit` is a conventional commit generator that interprets commit types from `gitmoji` through `conventional-commits` to propose a bridged gap through multiple formats.

For developers that use `gitmoji` it is not always possible to do so in every project. However, to keep workflows the same it would be ideal to introduce a configuration that would provide standards to applications while having some modicum of “fun.”

This can hook into your release system to create release notes.

> **📝 Note:** This package is ESM

## Usage

### Local

Install as a `devDependencies`:

```bash
# pnpm
pnpm add ccommit --save-dev

```

<!--
```bash

# npm
npm install ccommit --save-dev

# yarn
yarn add ccommit --dev
```
-->

> **📝 Note:** This is my preference as I try to limit globals wherever possible.

### Global

```bash
# pnpm
pnpm add ccommit --global
```

<!--
```bash
# npm
npm install ccommit --g

# yarn
yarn global add ccommit

# homebrew
brew install ccommit
```
-->

> **📝 Note:** For non-node projects this _can_ be helpful, but again, try to limit globals.

### Client

Call directly after staging files

```bash
# local
pnpm ccommit -c

# global
ccommit -c
```

<!--
```bash
# packages
# node ./packages/ccommit/dist/index.js -c
```
 -->

> **📝 Note:** Choose `local` or `global`

### Hook

Add this to your `prepare-commit-msg` for `git`:

```bash
exec < /dev/tty
# local
pnpm ccommit --hook || true

# global
ccommit --hook || true
```

<!--
```bash
# packages
# node ./packages/ccommit/dist/index.js --hook || true
```
 -->

> **📝 Note:** Choose `local` or `global`

## Options

```bash
pnpm ccommit -h
```

You can pass `option` arguments via the command line directly. If you choose this method, you are opting-out of the command line generator and will need to supply at least `type|title`.

## Formats

### Gitmoji

- 😜 [gitmoji](https://gitmoji.dev)

### Conventional

- 👔 [conventional](https://www.conventionalcommits.org)
  - a mapping of `gitmoji` to what could be construed as it’s more in-depth `conventional` counterparts
  - can pass `--noemoji|-xe` and turn emojis off within `conventional`

<!--
### Custom

🍕 Creating a `custom` configuration can be ideal if you want more control, or have more specific business needs for your application. Using `cosmiconfig` you can create:

- `.ccommit`
- `.ccommit.json`
- `.ccommit.js`

By providing configuration options for your project.
 -->

## Roadmap

This was meant to sunset `@jeromefitz/git-cz` as a year-end personal hackathon. This will keep up with `gitmoji` and ideally some tenets of ‘best of both worlds’ could make it to `gitmoji-cli` some day. (There are a few closed issues on ‘boring’ versions already.)

As a result it is a mash-up of both and I have tried to add references where applicable:

- 🔗 [`gitmoji-cli`](https://github.com/carloscuesta/gitmoji-cli)
  - This repo started from scratch, but then reworked to be more close to above for potential future feature addition
  - 📄 Additional MIT LICENSE provided as `LICENSE-gitmoji-cli`
- 🔗 [`@jeromefitz/git-cz`](https://github.com/jeromefitz/packages)
