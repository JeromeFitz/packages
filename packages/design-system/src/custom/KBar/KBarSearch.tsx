import { KBarSearch } from 'kbar'

import { Box, Flex, Heading, Icon } from '../../components/index'

import { KBarSearchStyle } from './KBar.styles'

const KBarSearchImpl = ({ ...props }) => {
  return (
    <Box
      css={{
        borderLeftWidth: '$2',
        borderRadius: '$2',
        ml: '$3',
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
              height: '$4',
              width: '$4',
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
            <Icon.MagnifyingGlass css={{ marginLeft: '7px', marginTop: '3px' }} />
          </Heading>
        </Flex>

        <KBarSearch className={KBarSearchStyle()} type="text" {...props} />
      </Flex>
    </Box>
  )
}

export { KBarSearchImpl as KBarSearch }
