import { css, darkTheme } from '../../stitches.config'

/**
 * @styles
 */
const KBarPositionerStyle = css({
  background: 'rgba(255 255 255 / 0.8)',
  zIndex: '$max',
  [`.${darkTheme} &`]: {
    background: 'rgba(0 0 0 / 0.8)',
  },
})
const KBarAnimatorStyle = css({
  backgroundColor: '$loContrast',
  boxShadow: '0 0 0 2px $colors$grayA9',
  borderRadius: '$2',
  minHeight: '$7',
  padding: '$1',
  // overflow: 'hidden',
  height: '100%',
  width: '100%',
  '@bp1': {
    height: '100%',
    maxHeight: '80vh',
    maxWidth: '75vw',
    minHeight: '80px',
    minWidth: '180px',
    // width: '55%',
  },
})
const KBarSearchStyle = css({
  backgroundColor: 'transparent',
  border: 'none',
  borderRadius: '$2',
  color: '$hiContrast',
  fontFamily: '$sans',
  fontWeight: 'bold',
  outline: 'none',
  pt: '$1',
  width: '100%',
  // ref: https://twitter.com/joshwcomeau/status/1379782931116351490?s=12
  fontSize: '1rem',
  '@bp1': {
    fontSize: '$3',
  },
})

export { KBarPositionerStyle, KBarAnimatorStyle, KBarSearchStyle }
