import { Box, Flex } from '@jeromefitz/design-system/components'
import { useKBar } from 'kbar'
import * as React from 'react'

const KBarWindowControls = () => {
  const { query } = useKBar()

  return (
    <Flex align="center" css={{ px: '$4', pt: '$4' }} gap="2">
      <Box as="a" onClick={query.toggle}>
        <Box
          css={{
            cursor: 'pointer',
            width: '$3',
            height: '$3',
            borderRadius: '$round',
            backgroundColor: '$colors$slate10',
            '&:hover': { backgroundColor: '$colors$slate11' },
          }}
        />
      </Box>
      <Box as="a" onClick={query.toggle}>
        <Box
          css={{
            cursor: 'pointer',
            width: '$3',
            height: '$3',
            borderRadius: '$round',
            backgroundColor: '$colors$slate8',
            '&:hover': { backgroundColor: '$colors$slate9' },
          }}
        ></Box>
      </Box>
      <Box as="a" onClick={query.toggle}>
        <Box
          css={{
            cursor: 'pointer',
            width: '$3',
            height: '$3',
            borderRadius: '$round',
            backgroundColor: '$colors$slate6',
            '&:hover': { backgroundColor: '$colors$slate7' },
          }}
        ></Box>
      </Box>
    </Flex>
  )
}

export { KBarWindowControls }
