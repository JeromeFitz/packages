# 🥳️ git(moji)-cz => @jeromefitz/git-cz

> **📝 Note:** This package is now deprecated as of `@jeromefitz/git-cz@14.4.3`

Please migrate to [`ccommit`](https://github.com/JeromeFitz/packages/tree/main/packages/ccommit#readme). There will be no further updates to `git-cz`.

## 🍴️ Why this Fork

```bash
npm i -g git-cz
added 1 package in 0.612s
```

Installs in 0.6s vs 31.1s.

### 🍽️ But Why _this_ Fork

I needed to customize some things, and seemed like the intent was breaking away from [`streamich/git-cz`](https://github.com/streamich/git-cz).

- [x] Package Upgrades
- [x] Node14 Support
- [x] Subject Customization
- [x] Theming: Gitmoji ✨️ (new default)
  - Semantic Versioning Requirements for CI/CD
- [x] Gitflow Brancing
  - CLI Customizations
- [x] Codestyle Preference
  - Getting there
- [ ] TypeScript Migration
  - Eventually getting there

📝️ Note: `@jeromefitz/git-cz-v7.0.0` is the main breaking off point

## 🔧️ Custom config

You can provide a custom configuration in a `changelog.config.js` file in your repo, or in any parent folder.

git-cz will search for the closest config file.

- [Default Config](https://github.com/JeromeFitz/git-cz/blob/main/src/themes/gitmoji.js))

## 🚧️ Non-interactive mode

Using `--non-interactive` flag you can run `git-cz` non-interactive mode.

For example:

```bash
git-cz --non-interactive --type=feat --subject="add onClick prop to component"
```

CLI parameters:

- `--body`
- `--breaking`
- `--issues`
- `--lerna`
- `--scope`
- `--subject`
- `--type`

<!-- ## Disable Emoji

Using `--disable-emoji` flag will disable emoji.

For example:

```bash
git-cz --disable-emoji
``` -->

## :octocat: Commit

### Subject via Format

By default the subject format is: `{emoji} {scope} {branchName}{subject}`

```bash
--format "{emoji} {scope} {branchName}{subject}"
```

```json
{
  "commit": {
    "format": "{emoji} {scope} {branchName}{subject}"
  }
}
```

You can configure your own using the following fields:

- `{branchName}`
- `{emoji}`
- `{scope}`
- `{subject}`
- `{type}`

These are the _only_ fields that will be dynamically replaced by `@jeromefitz/git-cz`.

These are not `${type}` so in your configuration if you need to pass dynamically values to `format` you can while keeping these separate. Helpful for when adding ` [skip ci]` to `format` conditionally.

📝️ Note: If your configuration file _is_ dynamic and you want to override these change yours at run time to `${type}` 😅️. These fields are only replaced _if_ they exist. Heck, you can have a format of: `format: "static(hard): code value"` if you really want (please do not).

#### branchName

This is really only useful if you are using an issue tracker like Jira.

```bash
▲ git-cz [ABC-1234] git-cz
```

Would pull `ABC-1234` in for `{branchName}`

If you were doing something like:

```bash
▲ git-cz [feature/gitflow-branch-names]
```

You would not want to pass `branchPrefix` as that would be a long commit message.

Also most likely if you are doing feature branches you are doing `ABC-1234`'s into it.

<!--
📝️ Note: If you want to keep emojis in the cli and not in your code commits you can do so by not `disable-emoji|disableEmoji` and not putting `{emoji}` in your format:

```bash
--format "{type}{scope}: {subject}"
```

Have fun in your console if you can't in your codebase. 🤣️ -->

<!-- ### Theme

`git-cz` provides two themes out of the box:

1. `default` (which is `gitmoji`)
2. `original` (which is "old default" from `streamich/git-cz`).

Themes are an opt-in feature. If nothing is provided for `theme` it will fallback to `default`.

📝️ Note: As of 7.x, the opt-in is `default` still but updated to `gitmoji`

#### Default

[gitmoji](https://gitmoji.dev/)

- ✨️ feat
- ♻️ refactor
- etc.

You can `extend` this theme by pulling `./dist/gitmoji/index.json` into your `changelog.config.js` and adding, refactoring as you see fit as well.

📝️ Note: `chore` is provided as a `git-cz` fallback for those that enjoy using it. Otherwise all "original" `git-cz` => `default` have a 1:1 map to `gitmoji`.

📝️ Note: This will override default types along with their emojis.

#### Original

These are the emojis you know and love from `git-cz` available as an **override**.

- 🎸️ feat
- 💡 refactor
- etc.

```bash
--theme original
```

```json
{
  "theme": "original"
}
``` -->

### Types

From `gitmoji`:

- `access`: Improve accessibility
- `analytics`: Add or update analytics or track code
- `animation`: Add or update animations and transitions
- `arch`: Make architectural changes
- `assets`: Add or update assets
- `beer`: Write code drunkenly
- `breaking`: Introduce breaking changes
- `build`: Add or update development scripts
- `catch`: Catch errors
- `ci`: Add or update CI build system
- `clean`: Deprecate code that needs to be cleaned up
- `compat`: Update code due to external API changes
- `config`: Add or update configuration files
- `contrib-add`: Add or update contributor(s)
- `data`: Data exploration/inspection
- `db`: Perform database related changes
- `dep-add`: Add a dependency
- `dep-rm`: Remove a dependency
- `dep-up`: Add or update compiled files or packages
- `deploy`: Deploy stuff
- `docs`: Add or update documentation
- `docs-code`: Add or update comments in source code
- `downgrade`: Downgrade dependencies
- `egg`: Add or update an easter egg
- `experiment`: Perform experiments
- `feat`: Introduce new features
- `fix`: Fix a bug
- `fix-ci`: Fix CI Build
- `flags`: Add, update, or remove feature flags
- `hotfix`: Critical hotfix
- `i18n`: Internationalization and localization
- `ignore`: Add or update a .gitignore file
- `init`: Begin a project
- `iphone`: Work on responsive design
- `license`: Add or update license
- `lint`: Fix compiler / linter warnings
- `log-add`: Add or update logs
- `log-rm`: Remove logs
- `merge`: Merge branches
- `mock`: Mock things
- `mv`: Move or rename resources (e.g.: files, paths, routes)
- `patch`: Simple fix for a non-critical issue
- `perf`: Improve performance
- `poo`: Write bad code that needs to be improved
- `prune`: Remove code or files
- `pushpin`: Pin dependencies to specific versions
- `refactor`: Refactor code
- `release`: Release / Version tags
- `revert`: Revert changes
- `rip`: Remove dead code
- `roles`: Work on code related to authorization, roles and permissions
- `security`: Fix security issues
- `seed`: Add or update seed files
- `seo`: Improve SEO
- `snapshot`: Add or update snapshots
- `style`: Improve structure / format of the code
- `test`: Add or update tests
- `texts`: Add or update text and literals
- `types`: Add or update types
- `typo`: Fix typos
- `ui`: Add or update the UI and style files
- `upgrade`: Upgrade dependencies
- `ux`: Improve user experience / usability
- `wip`: Work in progress

Custom additivies:

- `chore`: Changes that don’t modify src or test file
- `rollforward`: Create rollforward version
- `run-build`: Custom type for CI/CD to hook into run build override

### Subject

The subject contains succinct description of the change:

- Use the imperative, present tense: "change" not "changed" nor "changes"
- No dot (.) at the end.

### Body

Just as in the **subject**, use the imperative, present tense: "change" not "changed" nor "changes".
The body should include the motivation for the change and contrast this with previous behavior.

<!-- #### Affects [only on [lerna](https://lernajs.io/) environments]

Select the packages the commit affected. -->

### Breaking Changes

**Breaking Changes** must start with the words `BREAKING CHANGE:`.

<!-- ### Footer

The footer is the place to reference any tasks related to this commit. -->

## Husky

If you are using `husky@5.x` on your project that has `git-cz` as a local dependency please be cognizant of **locally installed binaries**:

> If you were calling directly locally installed binaries, you need to run them via your package manager:

```sh
npx --no-install git-cz --hook || true
```

```sh
yarn git-cz --hook || true
```

- ref: https://typicode.github.io/husky/#/?id=locally-installed-binaries

## Branch

Change the `mode` and create branches via gitflow:

```bash
git-cz -m branch
```

### Roadmap

This is not going to be great to type, but may be good to move to:

- `https://github.com/commitizen/cz-cli` and create adapter/plugins.
  - ⭐️ 11.k to 500
  - ⬇️ 373k to 23.9k
