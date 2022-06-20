import { Box, Flex } from '../../components/index'

// ⌘

const cssIcon = {
  fontFamily: '$sans',
  fontSize: '0.825rem',
  mr: '$1',
}
const cssText = {
  fontFamily: '$sans',
  fontSize: '0.75rem',
  ml: '$3',
}

const KBarFooter = () => {
  return (
    <Flex as="ul" css={{ m: 0, p: 0, ml: '$1', listStyleType: 'none' }}>
      <Box as="li" css={cssText}>
        <Box as="span" css={cssIcon}>
          ↑↓
        </Box>
        Select
      </Box>
      <Box as="li" css={cssText}>
        <Box as="span" css={{ ...cssIcon }}>
          ↵
        </Box>
        Open
      </Box>
    </Flex>
  )
}

export { KBarFooter }
