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
      <Icon.Pencil />
      <Icon.GitHub css={{ color: '$colors$brand' }} />
      <Icon.GitHub css={{ color: '$colors$warning' }} />
      <Icon.ExternalLink />
      <Separator decorative margin="my4" size="full" />
      <Icon.Return
        style={{
          marginTop: '3px',
          marginRight: '10px',
          width: '1rem',
          height: '1rem',
        }}
      />
      <Icon.Map />
      <Icon.Map css={{ color: '$colors$brand' }} />
      <Icon.Ticket css={{ color: '$colors$brand' }} />
      <Separator decorative margin="my4" size="full" />
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
        {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
        {/* @ts-ignore */}
        <Blockquote css={{ backgroundColor: 'green' }}>
          <Text as="p" css={{ color: '$loContrast' }}>
            Lorem ipsum dolor.
          </Text>
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
