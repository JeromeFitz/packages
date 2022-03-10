import { MagnifyingGlassIcon } from '@radix-ui/react-icons'
import { KBarSearch } from 'kbar'

import { Box, Flex, Heading } from '../index'

import { KBarSearchStyle } from './KBar.styles'

const KBarSearchImpl = () => {
  return (
    <Box
      css={{
        borderLeftWidth: '$2',
        borderRadius: '$2',
        ml: '$2',
      }}
      role="button"
    >
      <Flex gap="4">
        <Flex
          direction="column"
          justify="center"
          align="center"
          css={{
            '& svg': {
              height: '$3',
              width: '$3',
              color: '$hiContrast',
            },
          }}
        >
          <Heading
            css={{
              color: '$hiContrast',
            }}
            size="1"
          >
            <MagnifyingGlassIcon />
          </Heading>
        </Flex>

        <KBarSearch
          className={KBarSearchStyle()}
          defaultPlaceholder="Type to search menu"
          type="text"
        />
      </Flex>
    </Box>
  )
}

export { KBarSearchImpl as KBarSearch }
