import { styled } from '../../lib/stitches.config'

const Grid = styled('div', {
  boxSizing: 'border-box',
  display: 'grid',

  variants: {
    align: {
      baseline: {
        alignItems: 'baseline',
      },
      center: {
        alignItems: 'center',
      },
      end: {
        alignItems: 'end',
      },
      start: {
        alignItems: 'start',
      },
      stretch: {
        alignItems: 'stretch',
      },
    },
    columns: {
      1: {
        gridTemplateColumns: 'repeat(1, 1fr)',
      },
      2: {
        gridTemplateColumns: 'repeat(2, 1fr)',
      },
      3: {
        gridTemplateColumns: 'repeat(3, 1fr)',
      },
      4: {
        gridTemplateColumns: 'repeat(4, 1fr)',
      },
      5: {
        gridTemplateColumns: 'repeat(5, 1fr)',
      },
      6: {
        gridTemplateColumns: 'repeat(6, 1fr)',
      },
    },
    flow: {
      column: {
        gridAutoFlow: 'column',
      },
      columnDense: {
        gridAutoFlow: 'column dense',
      },
      dense: {
        gridAutoFlow: 'dense',
      },
      row: {
        gridAutoFlow: 'row',
      },
      rowDense: {
        gridAutoFlow: 'row dense',
      },
    },
    gap: {
      1: {
        gap: '$1',
      },
      2: {
        gap: '$2',
      },
      3: {
        gap: '$3',
      },
      4: {
        gap: '$4',
      },
      5: {
        gap: '$5',
      },
      6: {
        gap: '$6',
      },
      7: {
        gap: '$7',
      },
      8: {
        gap: '$8',
      },
      9: {
        gap: '$9',
      },
    },
    gapX: {
      1: {
        columnGap: '$1',
      },
      2: {
        columnGap: '$2',
      },
      3: {
        columnGap: '$3',
      },
      4: {
        columnGap: '$4',
      },
      5: {
        columnGap: '$5',
      },
      6: {
        columnGap: '$6',
      },
      7: {
        columnGap: '$7',
      },
      8: {
        columnGap: '$8',
      },
      9: {
        columnGap: '$9',
      },
    },
    gapY: {
      1: {
        rowGap: '$1',
      },
      2: {
        rowGap: '$2',
      },
      3: {
        rowGap: '$3',
      },
      4: {
        rowGap: '$4',
      },
      5: {
        rowGap: '$5',
      },
      6: {
        rowGap: '$6',
      },
      7: {
        rowGap: '$7',
      },
      8: {
        rowGap: '$8',
      },
      9: {
        rowGap: '$9',
      },
    },
    justify: {
      between: {
        justifyContent: 'space-between',
      },
      center: {
        justifyContent: 'center',
      },
      end: {
        justifyContent: 'end',
      },
      start: {
        justifyContent: 'start',
      },
    },
  },
})

export { Grid }
