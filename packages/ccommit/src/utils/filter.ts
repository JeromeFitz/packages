import Fuse from 'fuse.js'

const options = {
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
  threshold: 0.4,
}

const filterGitmojis = (input: string, gitmojis: any) => {
  const fuse = new Fuse(gitmojis, options)

  return input ? fuse.search(input).map((gitmoji) => gitmoji.item) : gitmojis
}

export { filterGitmojis }
