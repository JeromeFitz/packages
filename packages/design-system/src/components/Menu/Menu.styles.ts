import { css } from '@ds/stitches.config'

const baseItemCss = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  fontFamily: '$untitled',
  fontSize: '$1',
  fontVariantNumeric: 'tabular-nums',
  lineHeight: '1',
  cursor: 'default',
  userSelect: 'none',
  whiteSpace: 'nowrap',
  height: '$5',
  px: '$5',
})

const itemCss = css(baseItemCss, {
  position: 'relative',
  color: '$hiContrast',

  '&:focus': {
    outline: 'none',
    backgroundColor: '$blue9',
    color: 'white',
  },

  '&[data-disabled]': {
    color: '$slate9',
  },
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
  height: 1,
  my: '$1',
  backgroundColor: '$slate6',
})

export { baseItemCss, itemCss, labelCss, menuCss, separatorCss }
