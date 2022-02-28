import {
  Link,
  PageHeading,
  Separator,
} from '@jeromefitz/design-system/src/components'
import { ToastProvider, Toaster } from '@jeromefitz/design-system/src/custom/Toast'
import NextLink from 'next/link'

import { ToastCustom } from '../components/Toast'

function PagesToastCustom({}) {
  return (
    <ToastProvider>
      <PageHeading
        title="Toast Custom"
        description="Holding for move to full Radix UI."
      />
      <Separator decorative margin="my4" size="full" />
      <NextLink href="/" passHref>
        <Link>Back to Index</Link>
      </NextLink>
      <ToastCustom />
      <Toaster />
    </ToastProvider>
  )
}

export default PagesToastCustom
