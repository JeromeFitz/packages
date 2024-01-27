import { styled } from '../../lib/stitches.config'

const TableCaption = styled('caption', {
  marginBottom: '$5',
  textAlign: 'start',
})

const Tbody = styled('tbody', {
  width: '100%',
})

const Tfoot = styled('tfoot', {})

const Tr = styled('tr', {})

const Th = styled('th', {
  borderBottom: '1px solid $gray4',
  defaultVariants: {
    align: 'start',
    border: 'solid',
  },
  fontSize: '$2',
  fontWeight: 'unset',
  py: '$2',
  textAlign: 'start',
  variants: {
    align: {
      center: {
        textAlign: 'center',
      },
      end: {
        textAlign: 'end',
      },
      start: {
        textAlign: 'start',
      },
    },
    border: {
      dashed: {
        borderBottom: '1px dashed $gray8',
      },
      solid: {
        borderBottom: '1px solid $gray4',
      },
    },
  },
})

const Td = styled('td', {
  borderBottom: '1px solid $gray4',
  defaultVariants: {
    align: 'start',
    border: 'solid',
  },
  fontSize: '$2',
  py: '$2',
  variants: {
    align: {
      center: {
        textAlign: 'center',
      },
      end: {
        textAlign: 'end',
      },
      start: {
        textAlign: 'start',
      },
    },
    border: {
      dashed: {
        borderBottom: '1px dashed $gray8',
      },
      solid: {
        borderBottom: '1px solid $gray4',
      },
    },
  },
})

const Thead = styled('thead', {
  [`& ${Td}`]: {
    color: '$gray11',
    fontSize: '$1',
  },
  [`& ${Th}`]: {
    color: '$gray11',
    fontSize: '$1',
  },
})

const Table = styled('table', {
  borderSpacing: 0,
  tableLayout: 'fixed',
  variants: {
    striped: {
      true: {
        [`& ${Tbody}`]: {
          [`& ${Tr}`]: {
            '&:nth-child(odd)': {
              bc: '$gray2',
            },
          },
        },
      },
    },
  },
  width: '100%',
})

export { Table, TableCaption, Tbody, Td, Tfoot, Th, Thead, Tr }
