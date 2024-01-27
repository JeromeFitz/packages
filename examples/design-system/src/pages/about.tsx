import {
  Blockquote,
  Box,
  Callout,
  Icon,
  Link,
  PageHeading,
  Separator,
  Text,
  VisuallyHidden,
} from '@jeromefitz/design-system/src/components'

import NextLink from 'next/link'

function Home({}) {
  return (
    <>
      <PageHeading
        description="Sample page for menu routing testing."
        title="About"
      />
      <VisuallyHidden>
        <Text>Not visible.</Text>
      </VisuallyHidden>
      <Separator decorative my="4" size="full" />
      <Icon.Pencil />
      <Icon.GitHub css={{ color: '$colors$brand' }} />
      <Icon.GitHub css={{ color: '$colors$warning' }} />
      <Icon.ExternalLink />
      <Separator decorative my="4" size="full" />
      <Icon.Return
        style={{
          height: '1rem',
          marginRight: '10px',
          marginTop: '3px',
          width: '1rem',
        }}
      />
      <Icon.Map />
      <Icon.Map css={{ color: '$colors$brand' }} />
      <Icon.Ticket css={{ color: '$colors$brand' }} />
      <Separator decorative my="4" size="full" />
      <Box
        as="section"
        css={{
          py: '$4',
        }}
        id="blockquote"
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
      <Callout variant="quote">
        <Text as="p" variant="quote">
          Lorem ipsum dolor.
        </Text>
      </Callout>
      <NextLink href="/" legacyBehavior passHref>
        <Link>Back to Index</Link>
      </NextLink>
    </>
  )
}

export default Home
