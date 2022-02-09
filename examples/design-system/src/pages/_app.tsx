import { Box, Container } from '@jeromefitz/design-system/components'
import { globalCss } from '@jeromefitz/design-system/stitches.config'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import * as React from 'react'

import { Header } from '../components/Header'
import { Providers } from '../context/Providers'
import globalStyles from '../styles/global'

function MyApp({ Component, pageProps, router }: AppProps) {
  globalCss(globalStyles)()
  return (
    <Providers>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0,viewport-fit=cover"
        />
      </Head>
      <Container as="main" id="main">
        <Header />
        <Box css={{ pt: '$4' }}>
          <Component {...pageProps} key={router.route} />
        </Box>
      </Container>
    </Providers>
  )
}

export default MyApp
