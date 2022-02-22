# @jeromefitz/release-notes

Heavily customized fork (_cannot_ stress that enough) of [`conventional-changelog`](https://github.com/conventional-changelog/conventional-changelog) and [`release-notes-generator`](https://github.com/semantic-release/release-notes-generator).

This moves away from Handlebars into TypeScript and is currently hyper-specific to GitHub only. :octocat:

Will move to `remark` once `semantic-release` is ESM.

## Installation

The usual:

```sh
yarn add @jeromefitz/release-notes
```

Add it to your `release.config.js` and pass `parserOpts` and `writerOpts`:

```js
    [
      '@jeromefitz/release-notes',
      {
        parserOpts,
        writerOpts,
      },
    ],
```
