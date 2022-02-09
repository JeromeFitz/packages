import { Link, PageHeading } from '@jeromefitz/design-system/components'
import NextLink from 'next/link'

function Home({}) {
  return (
    <>
      <PageHeading
        title="About"
        description="Sample page for menu routing testing."
      />
      <NextLink href="/" passHref>
        <Link>Back to Index</Link>
      </NextLink>
    </>
  )
}

export default Home
