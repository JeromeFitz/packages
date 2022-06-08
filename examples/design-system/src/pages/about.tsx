import {
  Blockquote,
  Box,
  Callout,
  Icon,
  Link,
  PageHeading,
  Separator,
  Text,
} from '@jeromefitz/design-system/src/components'
import NextLink from 'next/link'

function Home({}) {
  return (
    <>
      <PageHeading
        title="About"
        description="Sample page for menu routing testing."
      />
      <Separator decorative margin="my4" size="full" />
      <Icon.ChatBubble />
      <Box
        as="section"
        id="blockquote"
        css={{
          py: '$4',
        }}
      >
        {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
        {/* @ts-ignore */}
        <Blockquote>
          <Text as="p">Lorem ipsum dolor.</Text>
        </Blockquote>
      </Box>
      <Callout variant="warning">
        <Text as="p" variant="warning">
          Lorem ipsum dolor.
        </Text>
      </Callout>
      <NextLink href="/" passHref>
        <Link>Back to Index</Link>
      </NextLink>
    </>
  )
}

export default Home
