import { css } from '../../lib/stitches.config'

const baseItemCss = css({
  alignItems: 'center',
  cursor: 'default',
  display: 'flex',
  fontFamily: '$sans',
  fontSize: '$1',
  fontVariantNumeric: 'tabular-nums',
  height: '$5',
  justifyContent: 'space-between',
  lineHeight: '1',
  px: '$5',
  userSelect: 'none',
  whiteSpace: 'nowrap',
})

const itemCss = css(baseItemCss, {
  '&:focus': {
    backgroundColor: '$blue9',
    color: 'white',
    outline: 'none',
  },
  '&[data-disabled]': {
    color: '$slate9',
  },

  color: '$hiContrast',

  position: 'relative',
})

const labelCss = css(baseItemCss, {
  color: '$slate11',
})

const menuCss = css({
  boxSizing: 'border-box',
  minWidth: 120,
  py: '$1',
})

const separatorCss = css({
  backgroundColor: '$slate6',
  height: 1,
  my: '$1',
})

export { baseItemCss, itemCss, labelCss, menuCss, separatorCss }
