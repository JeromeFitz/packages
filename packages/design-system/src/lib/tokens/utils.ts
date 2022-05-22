import type { ScaleValue } from '@stitches/react'

const utils = {
  p: (value: ScaleValue<'padding'> | string | number) => ({
    padding: value,
  }),
  pt: (value: ScaleValue<'paddingTop'> | string | number) => ({
    paddingTop: value,
  }),
  pr: (value: ScaleValue<'paddingRight'> | string | number) => ({
    paddingRight: value,
  }),
  pb: (value: ScaleValue<'paddingBottom'> | string | number) => ({
    paddingBottom: value,
  }),
  pl: (value: ScaleValue<'paddingLeft'> | string | number) => ({
    paddingLeft: value,
  }),
  px: (value: ScaleValue<'paddingLeft'> | string | number) => ({
    paddingLeft: value,
    paddingRight: value,
  }),
  py: (value: ScaleValue<'paddingTop'> | string | number) => ({
    paddingTop: value,
    paddingBottom: value,
  }),

  m: (value: ScaleValue<'margin'> | string | number) => ({
    margin: value,
  }),
  mt: (value: ScaleValue<'marginTop'> | string | number) => ({
    marginTop: value,
  }),
  mr: (value: ScaleValue<'marginRight'> | string | number) => ({
    marginRight: value,
  }),
  mb: (value: ScaleValue<'marginBottom'> | string | number) => ({
    marginBottom: value,
  }),
  ml: (value: ScaleValue<'marginLeft'> | string | number) => ({
    marginLeft: value,
  }),
  mx: (value: ScaleValue<'marginLeft'> | string | number) => ({
    marginLeft: value,
    marginRight: value,
  }),
  my: (value: ScaleValue<'marginTop'> | string | number) => ({
    marginTop: value,
    marginBottom: value,
  }),

  ta: (value: ScaleValue<'textAlign'> | string | number) => ({ textAlign: value }),

  fd: (value: ScaleValue<'flexDirection'> | string | number) => ({
    flexDirection: value,
  }),
  fw: (value: ScaleValue<'flexWrap'> | string | number) => ({ flexWrap: value }),

  ai: (value: ScaleValue<'alignItems'> | string | number) => ({
    alignItems: value,
  }),
  ac: (value: ScaleValue<'alignContent'> | string | number) => ({
    alignContent: value,
  }),
  jc: (value: ScaleValue<'justifyContent'> | string | number) => ({
    justifyContent: value,
  }),
  as: (value: ScaleValue<'alignSelf'> | string | number) => ({ alignSelf: value }),
  fg: (value: ScaleValue<'flexGrow'> | string | number) => ({ flexGrow: value }),
  fs: (value: ScaleValue<'flexShrink'> | string | number) => ({
    flexShrink: value,
  }),
  fb: (value: ScaleValue<'flexBasis'> | string | number) => ({ flexBasis: value }),

  bc: (value: ScaleValue<'backgroundColor'> | string | number) => ({
    backgroundColor: value,
  }),

  br: (value: ScaleValue<'borderRadius'> | string | number) => ({
    borderRadius: value,
  }),
  btrr: (value: ScaleValue<'borderTopRightRadius'> | string | number) => ({
    borderTopRightRadius: value,
  }),
  bbrr: (value: ScaleValue<'borderBottomRightRadius'> | string | number) => ({
    borderBottomRightRadius: value,
  }),
  bblr: (value: ScaleValue<'borderBottomLeftRadius'> | string | number) => ({
    borderBottomLeftRadius: value,
  }),
  btlr: (value: ScaleValue<'borderTopLeftRadius'> | string | number) => ({
    borderTopLeftRadius: value,
  }),

  bs: (value: ScaleValue<'boxShadow'> | string | number) => ({ boxShadow: value }),

  lh: (value: ScaleValue<'lineHeight'> | string | number) => ({
    lineHeight: value,
  }),

  ox: (value: ScaleValue<'overflowX'> | string | number) => ({ overflowX: value }),
  oy: (value: ScaleValue<'overflowY'> | string | number) => ({ overflowY: value }),

  pe: (value: ScaleValue<'pointerEvents'> | string | number) => ({
    pointerEvents: value,
  }),
  us: (value: ScaleValue<'userSelect'> | string | number) => ({
    WebkitUserSelect: value,
    userSelect: value,
  }),

  userSelect: (value: ScaleValue<'userSelect'> | string | number) => ({
    WebkitUserSelect: value,
    userSelect: value,
  }),

  size: (value: ScaleValue<'width'> | string | number) => ({
    width: value,
    height: value,
  }),

  appearance: (value: ScaleValue<'appearance'> | string | number) => ({
    WebkitAppearance: value,
    appearance: value,
  }),
  backgroundClip: (value: ScaleValue<'backgroundClip'> | string | number) => ({
    WebkitBackgroundClip: value,
    backgroundClip: value,
  }),
}

export { utils }
