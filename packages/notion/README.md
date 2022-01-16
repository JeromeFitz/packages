# 🚧️ 🚧️ 🚧️ `@jeromefitz/notion` 🚧️ 🚧️ 🚧️

Wrapper stuff for [`jeromefitzgerald.com`](https://jeromefitzgerald.com).

**📝️ Please Note:**

- 🧐 Very specific to an implementation I re-use a lot
- 😬 Lots of `any` types (currently)
- 🤔️ Would be good to build this out to be more generic

This is really a custom thing, so not sure how useful this would be for anyone else.

This will not be ready for production/OSS use until `2.0.0` at the earliest. I would imagine all attempts at documentation will wildy fluctuate.

## Overview

`Notion` + `Next.js` + `swr`

The concept is kind of mapping `databases` from Notion to `routeTypes` in Next being kept in-sync post build via `swr`.

You will need a few values set up in Notion and identified in a configuration file within your repo provided to this package. (And by few, this is an understatement. [Good news! You _can_ create all the values dynamically, howver, that is outside of this package currently.])

## Quick

This API extends `@notionhq/client` so you will extend this one instead.

```tsx
import { Client } from '@jeromefitz/notion'

import { notionConfig as config } from '~config/websites'

const notion = new Client({ auth: process.env.NOTION_API_KEY, config })
```

You need to pass `config` which informs the package of all the wonderful Notion stuff you have. Will fill this out as I go (I hope haha).

```tsx
(alias) const config: {
    DATABASES: Databases;
    NOTION: DatabaseInfo;
    PAGES__HOMEPAGE: string;
    PAGES: string[];
    ROUTE_TYPES: any[];
}
```

### Next

Will add an `./examples/next/...` to show this with a public facing Notion at some point.

Custom setup to get `pathVariables` from `next`:

**`[...catchAll]`**:

```tsx
export const getStaticProps = async ({ preview = false, ...props }) => {
  const { catchAll } = props.params
  //   @todo(next) should come from `process.env...`
  //               `./pages/api/...` cache = false
  const cache = true
  // @todo(next) should come from `catchAll`
  const clear = false
  const pathVariables = getPathVariables({ config: notionConfig, catchAll })

  const data = await getCatchAll({ cache, catchAll, clear, pathVariables, preview })

  return {
    props: { preview, ...data, ...pathVariables, ...props },
    revalidate,
  }
}

export const getStaticPaths = () => {
  return getStaticPathsCatchAll()
}
```

**`getCatchAll.ts`**:

- Checks against `cache`
- Based on the `dataType` from `getPathVariables` calls `notion.dataTypes`
- Sets `data`
- Checks if should use `plaiceholder` to generate images
- Creates `cache` if it should
- Send back

**`getStaticPathsCatchAll.ts`**:

- Create paths via hard-coded values from configuration for:
  - `PAGES__HOMEPAGE` => `index.ts`
  - `PAGES` => Until we can get a proper query to dynamically generate
- Create paths to generate via `next` based off of `NOTION[#__database__#].databaseTypes`:
  - `LISTING`
  - `LISTING_BY_DATE`
  - `SLUG`
  - `SLUG_BY_ROUTE`
- Customizations for date based routing for:
  - `blog` => `./blog/yyyy/mm/dd/blog-title`
  - `events` => `./events/yyyy/mm/dd/events-title`
  - `episodes` => `./podcasts/#__podcast-title__#/#__episode-title#`

### Cache

Currently set to `json` files within `next` build. This (currently) causes it to be generated every build.

For larger datasets this should move to a Key/Value Store that takes into account `lastEdited` from Notion for anything since the last build. (Or someting like that.)

### Why

`Next` and `Notion` are awesome.

Before `@notionhq/client` this was _really_ hacky (**cough** actually _more_ than this, haha). And now that the API is public, figured I would move this out to keep myself honest and find ways to continually improve it since I had this as a private repo with no documentation (hence a lot of `any` types and a lack of a formal or even informal README).
