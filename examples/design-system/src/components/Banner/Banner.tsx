import {
  Banner,
  Container,
  Flex,
  IconButton,
  Link,
  Separator,
  Text,
} from '@jeromefitz/design-system/src/components'
import { ArrowTopRightIcon, CalendarIcon, Cross1Icon } from '@radix-ui/react-icons'
import NextLink from 'next/link'

// @todo(dynamic) notion api, upcoming event or evergreen info
const meta = {
  left: 'FRI 02/25',
  leftExtended: 'FRI 02/25 09:30PM',
  leftIcon: <CalendarIcon />,
  right: 'The Playlist',
  rightExtended: 'The Playlist: Band Name',
  rightIcon: <ArrowTopRightIcon />,
  url: '/about',
}

const _Banner = () => {
  return (
    <Container breakout>
      <NextLink href="/about" passHref>
        <Link>
          <Banner css={{ py: '$2', width: '100%' }}>
            <CalendarIcon />
            <Text css={{ color: 'inherit', fontWeight: 500 }} size="2">
              {meta.leftExtended}
            </Text>
            <Separator orientation="vertical" />
            <Flex direction="row" gap="1">
              <Text css={{ color: 'inherit', fontWeight: 500 }} size="2">
                {meta.rightExtended}
              </Text>
              {meta.rightIcon}
            </Flex>

            <IconButton
              css={{ mr: '$4', position: 'absolute', right: 0 }}
              variant="ghost"
            >
              <Cross1Icon />
            </IconButton>
          </Banner>
        </Link>
      </NextLink>
    </Container>
  )
}

export { _Banner as Banner }
