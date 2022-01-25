# `@jeromefitz/design-system`

Design System for [`jeromefitzgerald.com`](https://jeromefitzgerald.com).

## Props

Forked from [`radix-ui/design-system`](https://github.com/radix-ui/design-system)

## TODO

Would be nice to _show_ all of this. And the ability to pass configuration so we can reduce sending _all_ colours at the moment in the configuration.

### Components

- [x] Accordion
- [x] Alert
- [x] AlertDialog
- [x] Announce \***\*\*\*\***
- [ ] AppBar
- [x] Avatar
- [x] Badge
- [x] Banner
- [x] Box
- [x] BoxGrab \***\*\*\*\***
- [x] BoxLink \***\*\*\*\***
- [x] Breakout \***\*\*\*\***
- [x] Button
- [x] Card
- [x] Checkbox
- [x] Code
- [x] Container
- [ ] ContextMenu
- [ ] ControlGroup
- [ ] ~~DesignSystemProvider~~
- [x] Dialog
- [ ] DropdownMenu
- [x] Emoji \***\*\*\*\***
- [x] Flex
- [x] Grid
- [x] Heading
- [x] Hero \***\*\*\*\***
- [x] IconButton
- [x] IconLink \***\*\*\*\***
- [ ] Image
- [ ] Kbd (Keyboard Button)
- [x] Label
- [x] Link
- [ ] Menu
- [x] Note \***\*\*\*\***
- [ ] Notion \***\*\*\*\***
- [x] Overlay
- [x] PageHeading \***\*\*\*\***
- [x] Panel
- [x] Paragraph
- [x] Popover
- [x] ProgressBar
- [x] Radio
- [x] RadioCard
- [ ] RadioGrid
- [x] ScrollArea \***\*\*\*\***
- [ ] Scrollbar
- [x] Section
- [ ] Select
- [x] Separator
- [ ] Sheet
- [ ] SimpleToggle
- [x] Skeleton
- [ ] Slider
- [x] Status
- [x] Sub
- [x] Sup
- [x] Switch
- [x] Table
- [x] TabLink
- [x] Tabs
- [x] Text
- [x] TextArea
- [ ] TextField
- [x] Toast \***\*\*\*\***
- [x] Tooltip (+ `./custom/` \***\*\*\*\***)
- [ ] TreeItem
- [ ] VerifiedBadge

## Notion

This cannot be ported just yet. Wondering if this should instead go to:

- `@jeromefitz/notion` as a Skeleton where only the logic is provided.

Then one could use their own styling system via which Components they pass to `getContentNode`\*.

### Architecture

```sh
./Notion/
├─ components/
│  ├─ _unsupported_.tsx
│  ├─ bulleted_list_item.tsx
│  ├─ bulleted_list.tsx
│  ├─ callout.tsx
│  ├─ checkbox.tsx
│  ├─ column_list.tsx
│  ├─ column.tsx
│  ├─ date.tsx
│  ├─ files.tsx
│  ├─ heading_1.tsx
│  ├─ heading_2.tsx
│  ├─ heading_3.tsx
│  ├─ image.tsx
│  ├─ multi_select.tsx
│  ├─ numbered_list_item.tsx
│  ├─ numbered_list.tsx
│  ├─ paragraph.tsx
│  ├─ quote.tsx
│  ├─ relation.tsx
│  ├─ rich_text.tsx
│  ├─ title.tsx
│  ├─ to_do.tsx
│  ├─ toggle.tsx
│  ├─ url.tsx
├─ utils/
│  ├─ getContentNodes.tx
│  ├─ getContentType.tx
│  ├─ getContentTypeDetail.tsx
│  ├─ TextAnnotations.tsx
├─ ContentNodes.tsx
├─ index.ts
```

### ContentNodes

Receives `content` and `images` which comes from `@jeromefitz/notion`.

Cycles through each `node` via `getContentNodes` (=> `getContentType`) to determine:

- `ul`
- `ol`
- `*`

This is to wrap `li` (`bulleted_list_item|numbered_list_item`) accordingly.

Similiarly these components also cycle through `getContentNodes` for its `content`:

- `callout`
- `column_list` (=> `column`)
-
- `toggle` will cycle through its `content` for its children.

### getContentTypeDetail

For any `text` based component, this is called to get its attributions, to feed into `TextAnnotations`.

- `href`
- `plain_text`
- `annotations`

### Next.js

Cannot port these over until we can abstract away from `Next` in this component system.

Not sure how to do that just yet, maybe accept a Component for an `a|image` wrapper.

Though also, I am sensing a very opinionated theme throughout all of this, haha.

So maybe for now this only works with `Next` if we move it over early.

#### image

Currently tied to `next/image`

#### TextAnnotations

Currently tied to `next/link`

This is where we determine if the `Text` is a `Text` or `Link` and apply all annotations.

#### next/dynamic

This is used as the hash for `getContentNode`, which cannot currently get ported over.

Most likely the way to call these section of Components will be to create your own `getContentNode` as you would not want to load all of these if you do not have to and add your own logic to SSR only the first `X` components in the tree.

```tsx
const getContentNode = {
  _unsupported: dynamic(() => import('./components/_unsupported')),
  bulleted_list_item: dynamic(() => import('./components/bulleted_list_item')),
  bulleted_list: dynamic(() => import('./components/bulleted_list')),
  callout: dynamic(() => import('./components/callout')),
  checkbox: dynamic(() => import('./components/checkbox')),
  column_list: dynamic(() => import('./components/column_list')),
  column: dynamic(() => import('./components/column')),
  date: dynamic(() => import('./components/date')),
  divider: dynamic(() => import('./components/divider')),
  files: dynamic(() => import('./components/files')),
  heading_1: dynamic(() => import('./components/heading_1')),
  heading_2: dynamic(() => import('./components/heading_2')),
  heading_3: dynamic(() => import('./components/heading_3')),
  image: dynamic(() => import('./components/image')),
  multi_select: dynamic(() => import('./components/multi_select')),
  numbered_list_item: dynamic(() => import('./components/numbered_list_item')),
  numbered_list: dynamic(() => import('./components/numbered_list')),
  paragraph: dynamic(() => import('./components/paragraph')),
  quote: dynamic(() => import('./components/quote')),
  relation: dynamic(() => import('./components/relation')),
  rich_text: dynamic(() => import('./components/rich_text')),
  title: dynamic(() => import('./components/title')),
  to_do: dynamic(() => import('./components/to_do')),
  toggle: dynamic(() => import('./components/toggle')),
  url: dynamic(() => import('./components/url')),
}
```
