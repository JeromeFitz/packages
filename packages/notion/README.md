# `@jeromefitz/notion`

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

### Why

`Next` and `Notion` are awesome.

Before `@notionhq/client` this was _really_ hacky (**cough** actually _more_ than this, haha). And now that the API is public, figured I would move this out to keep myself honest and find ways to continually improve it since I had this as a private repo with no documentation (hence a lot of `any` types and a lack of a formal or even informal README).
