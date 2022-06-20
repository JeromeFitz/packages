# Custom `kbar`

Implements [`kbar`](https://github.com/timc1/kbar) into your app with default styling.

## Install `kbar`

```bash
yarn install kbar
```

## Within your app

Wrap your app with `KBarProvider`. (This can be directly from `kbar` or through the additive sugar export from this repo.)

Then depending on "out-of-the-box" or customizations you have two options.

Both options require custom `KBarActions` as they will have `kbar.query.registerActions` specific to your app.

**Dynamic Loading:**

- Localized `KBarActions` can be if desired

### Option: Out of the Box

Create a `KBarPortal` (or named whatever) which can be anywhere within the wrapped `KBarProvider`.

`KBarDefault` wraps all necessary data and UI/UX which are informed by `KBarActions`.

```tsx
<>
  <KBarActions />
  <KBarDefault />
</>
```

**Dynamic Loading:**

- `KBarDefault` should not be dynamically loaded
  - Will handle any internal mechanics dynamically on your behalf
- Localized `KBarActions` can be if desired

### Option: Customization

Very similar, however, we create our own `KBar` component within our App for Custom Styling purposes.

Create a `KBarPortal` (or named whatever, as I realize it can get a bit self-referntial that we need to import `KBarPortal` as well now) which can be anywhere within the wrapped `KBarProvider`.

```tsx
<>
  <KBarActions />
  <KBarPortal>
    <KBar />
  </KBarPortal>
</>
```

**Dynamic Loading:**

- `KBarPortal` should not be dynamically loaded
- `KBarDefault` can be dynamically loaded
- Localized `KBarActions` can be if desired

#### `KBar`

These are the `children` components that are passed to the customized `KBarPortal` on how your `kbar` displays.

`KBarSearch|KBarSearchResults|KBarSubscriptions` are all very basic implementations that can be swapped out within the app you are creating.

```tsx
<>
  <KBarSubscriptions />
  <KBarSearch />
  <KBarSearchResults />
</>
```

However, that would not look all that great.

Example:

```tsx
<>
  <Box css={{ pb: '$2', pt: '$4', px: '$4' }}>
    <KBarSubscriptions />
    <KBarSearch />
  </Box>
  <Box css={{ px: '$2' }}>
    <KBarSearchResults />
  </Box>
  <Box css={{ py: '$2' }} />
</>
```

Above would be what is presented via `KBarDefault`.

**Dynamic Loading:**

- `KBarSearch` can be dynamically loaded
- `KBarSearchResults` can be dynamically loaded
- `KBarSubscriptions` should not as its logic informs the UI

## Example

There is an example located in this repo:

- `./examples/design-system/src/components/KBar/...`
