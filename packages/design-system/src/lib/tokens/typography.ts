const fallbacks = {
  mono: [
    'ui-monospace',
    'SFMono-Regular',
    'SF Mono',
    'Menlo',
    'Monaco',
    'Consolas',
    '"Liberation Mono"',
    '"Courier New"',
    'monospace',
  ].join(','),
  sans: [
    'ui-sans-serif',
    'system-ui',
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    '"Noto Sans"',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
    '"Noto Color Emoji"',
  ].join(','),
  serif: [
    'ui-serif',
    'Georgia',
    'Cambria',
    '"Times New Roman"',
    'Times',
    'serif',
  ].join(','),
}

const fonts = {
  'fallback-mono': fallbacks.mono,
  'fallback-sans': fallbacks.sans,
  'fallback-serif': fallbacks.serif,
  mono: '$fallback-mono',
  sans: '$fallback-sans',
  serif: '$fallback-serif',
}

// 1 => 12px => 0.75rem (!rem => mobile a11y)
// 2 => 14px
const fontSizes = {
  1: '12px',
  2: '0.875rem',
  3: '1rem',
  4: '1.125rem',
  5: '1.25rem',
  6: '1.5rem',
  7: '2rem',
  8: '2.25rem',
  9: '2.5rem',
}

// 400 => normal
// 700 => bold
const fontWeights = {
  1: '100',
  2: '200',
  3: '300',
  4: '400',
  5: '500',
  6: '600',
  7: '700',
  8: '800',
  9: '900',
}

export { fonts, fontSizes, fontWeights }
