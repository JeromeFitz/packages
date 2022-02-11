import {
  Link,
  PageHeading,
  Separator,
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
      <NextLink href="/" passHref>
        <Link>Back to Index</Link>
      </NextLink>
    </>
  )
}

export default Home
