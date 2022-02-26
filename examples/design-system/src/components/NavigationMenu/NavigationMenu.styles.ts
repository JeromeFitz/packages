import { darkTheme, styled } from '@jeromefitz/design-system/src/stitches.config'

const ListContent = styled('ul', {
  columnGap: 10,
  display: 'grid',
  listStyle: 'none',
  margin: 0,
  p: '$2',
  '@bp1': {
    p: '$3',
  },
  '@media (prefers-reduced-motion: no-preference)': {
    transition: 'all 250ms ease',
  },

  variants: {
    layout: {
      one: {
        '@media only screen and (min-width: 600px)': {
          gridTemplateColumns: '.75fr 1fr',
          width: 500,
        },
      },
      two: {
        '@media only screen and (min-width: 600px)': {
          gridAutoFlow: 'column',
          gridTemplateRows: 'repeat(3, 1fr)',
          width: 600,
        },
      },
      three: {
        '@media only screen and (min-width: 600px)': {
          gridAutoFlow: 'column',
          gridTemplateRows: 'repeat(4, 1fr)',
          width: 600,
        },
      },
    },
  },
})

const ListItem = styled('li', {
  borderRadius: '$2',
  py: '$1',
  px: '0',
  m: '0',
  '&:hover': {
    backgroundColor: '$colors$violet3',
  },
  '@media (prefers-reduced-motion: no-preference)': {
    transition: 'all 250ms ease',
  },
})

const LinkTitle = styled('div', {
  color: '$colors$violet12',
  fontWeight: 500,
  lineHeight: 1.2,
  marginBottom: 5,
  [`.${darkTheme} &`]: {
    color: '$colors$violet12',
  },
})

const LinkText = styled('p', {
  all: 'unset',
  color: '$colors$violet11',
  fontWeight: 'initial',
  lineHeight: 1.4,
})

const ViewportPosition = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  left: 0,
  perspective: '2000px',
  position: 'absolute',
  top: '100%',
  width: '100%',
})

export { ListContent, ListItem, LinkTitle, LinkText, ViewportPosition }
