import { css, darkTheme } from '../../stitches.config'

/**
 * @styles
 */
// @note(design-system) uh, this would not happen outside of monorepo
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const KBarPositionerStyle = css({
  background: 'rgba(255 255 255 / 0.8)',
  zIndex: '$max',
  [`.${darkTheme} &`]: {
    background: 'rgba(0 0 0 / 0.8)',
  },
})
// @note(design-system) uh, this would not happen outside of monorepo
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const KBarAnimatorStyle = css({
  backgroundColor: '$loContrast',
  boxShadow: '0 0 0 2px $colors$grayA9',
  borderRadius: '$2',
  minHeight: '$7',
  padding: '$1',
  // overflow: 'hidden',
  width: '90%',
  '@bp1': {
    width: '75%',
  },
})
// @note(design-system) uh, this would not happen outside of monorepo
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const KBarSearchStyle = css({
  backgroundColor: 'transparent',
  border: 'none',
  borderRadius: '$2',
  color: '$hiContrast',
  fontFamily: '$sans',
  fontSize: '1.25rem',
  fontWeight: 'bold',
  pb: '$3',
  outline: 'none',
  width: '100%',
})

export { KBarPositionerStyle, KBarAnimatorStyle, KBarSearchStyle }
