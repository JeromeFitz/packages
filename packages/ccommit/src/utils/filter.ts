import Fuse from 'fuse.js'
// import Fuse from 'fuse.js/dist/fuse.esm.js'

const options = {
  threshold: 0.4,
  keys: [
    {
      name: 'type',
      weight: 0.44,
    },
    {
      name: 'description',
      weight: 0.56,
    },
  ],
}

const filterGitmojis = (input: string, gitmojis: any) => {
  const fuse = new Fuse(gitmojis, options)

  return input ? fuse.search(input).map((gitmoji) => gitmoji.item) : gitmojis
}

export { filterGitmojis }
