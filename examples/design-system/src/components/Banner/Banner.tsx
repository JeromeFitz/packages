import {
  Banner,
  Container,
  Flex,
  Icon,
  IconButton,
  Link,
  Separator,
  Text,
} from '@jeromefitz/design-system/src/components'
import NextLink from 'next/link'

// @todo(dynamic) notion api, upcoming event or evergreen info
const meta = {
  left: 'FRI 02/25',
  leftExtended: 'FRI 02/25 09:30PM',
  leftIcon: <Icon.Calendar />,
  right: 'The Playlist',
  rightExtended: 'The Playlist: Band Name',
  rightIcon: <Icon.ArrowTopRight />,
  url: '/about',
}

const _Banner = () => {
  return (
    <Container breakout>
      <NextLink href="/about" legacyBehavior passHref>
        <Link>
          <Banner css={{ py: '$2', width: '100%' }}>
            <Icon.Calendar />
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
              <Icon.Cross />
            </IconButton>
          </Banner>
        </Link>
      </NextLink>
    </Container>
  )
}

export { _Banner as Banner }
