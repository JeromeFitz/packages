import type { ScaleValue } from '@stitches/react'

const utils = {
  ac: (value: ScaleValue<'alignContent'> | number | string) => ({
    alignContent: value,
  }),
  ai: (value: ScaleValue<'alignItems'> | number | string) => ({
    alignItems: value,
  }),
  appearance: (value: ScaleValue<'appearance'> | number | string) => ({
    appearance: value,
    WebkitAppearance: value,
  }),
  as: (value: ScaleValue<'alignSelf'> | number | string) => ({ alignSelf: value }),
  backgroundClip: (value: ScaleValue<'backgroundClip'> | number | string) => ({
    backgroundClip: value,
    WebkitBackgroundClip: value,
  }),
  bblr: (value: ScaleValue<'borderBottomLeftRadius'> | number | string) => ({
    borderBottomLeftRadius: value,
  }),
  bbrr: (value: ScaleValue<'borderBottomRightRadius'> | number | string) => ({
    borderBottomRightRadius: value,
  }),

  bc: (value: ScaleValue<'backgroundColor'> | number | string) => ({
    backgroundColor: value,
  }),
  br: (value: ScaleValue<'borderRadius'> | number | string) => ({
    borderRadius: value,
  }),
  bs: (value: ScaleValue<'boxShadow'> | number | string) => ({ boxShadow: value }),
  btlr: (value: ScaleValue<'borderTopLeftRadius'> | number | string) => ({
    borderTopLeftRadius: value,
  }),
  btrr: (value: ScaleValue<'borderTopRightRadius'> | number | string) => ({
    borderTopRightRadius: value,
  }),
  fb: (value: ScaleValue<'flexBasis'> | number | string) => ({ flexBasis: value }),
  fd: (value: ScaleValue<'flexDirection'> | number | string) => ({
    flexDirection: value,
  }),

  fg: (value: ScaleValue<'flexGrow'> | number | string) => ({ flexGrow: value }),

  fs: (value: ScaleValue<'flexShrink'> | number | string) => ({
    flexShrink: value,
  }),
  fw: (value: ScaleValue<'flexWrap'> | number | string) => ({ flexWrap: value }),

  jc: (value: ScaleValue<'justifyContent'> | number | string) => ({
    justifyContent: value,
  }),
  lh: (value: ScaleValue<'lineHeight'> | number | string) => ({
    lineHeight: value,
  }),
  m: (value: ScaleValue<'margin'> | number | string) => ({
    margin: value,
  }),
  mb: (value: ScaleValue<'marginBottom'> | number | string) => ({
    marginBottom: value,
  }),
  ml: (value: ScaleValue<'marginLeft'> | number | string) => ({
    marginLeft: value,
  }),
  mr: (value: ScaleValue<'marginRight'> | number | string) => ({
    marginRight: value,
  }),
  mt: (value: ScaleValue<'marginTop'> | number | string) => ({
    marginTop: value,
  }),

  mx: (value: ScaleValue<'marginLeft'> | number | string) => ({
    marginLeft: value,
    marginRight: value,
  }),

  my: (value: ScaleValue<'marginTop'> | number | string) => ({
    marginBottom: value,
    marginTop: value,
  }),
  ox: (value: ScaleValue<'overflowX'> | number | string) => ({ overflowX: value }),
  oy: (value: ScaleValue<'overflowY'> | number | string) => ({ overflowY: value }),
  p: (value: ScaleValue<'padding'> | number | string) => ({
    padding: value,
  }),
  pb: (value: ScaleValue<'paddingBottom'> | number | string) => ({
    paddingBottom: value,
  }),

  pe: (value: ScaleValue<'pointerEvents'> | number | string) => ({
    pointerEvents: value,
  }),

  pl: (value: ScaleValue<'paddingLeft'> | number | string) => ({
    paddingLeft: value,
  }),

  pr: (value: ScaleValue<'paddingRight'> | number | string) => ({
    paddingRight: value,
  }),
  pt: (value: ScaleValue<'paddingTop'> | number | string) => ({
    paddingTop: value,
  }),

  px: (value: ScaleValue<'paddingLeft'> | number | string) => ({
    paddingLeft: value,
    paddingRight: value,
  }),
  py: (value: ScaleValue<'paddingTop'> | number | string) => ({
    paddingBottom: value,
    paddingTop: value,
  }),

  size: (value: ScaleValue<'width'> | number | string) => ({
    height: value,
    width: value,
  }),

  ta: (value: ScaleValue<'textAlign'> | number | string) => ({ textAlign: value }),

  us: (value: ScaleValue<'userSelect'> | number | string) => ({
    userSelect: value,
    WebkitUserSelect: value,
  }),
  userSelect: (value: ScaleValue<'userSelect'> | number | string) => ({
    userSelect: value,
    WebkitUserSelect: value,
  }),
}

export { utils }
