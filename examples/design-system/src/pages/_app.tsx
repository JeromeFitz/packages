import {
  Container,
  // Section,
  ToastProvider,
  Toaster,
} from '@jeromefitz/design-system/components'
import { globalCss, darkTheme } from '@jeromefitz/design-system/stitches.config'
import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import * as React from 'react'

import globalStyles from '../styles/global'

function MyApp({ Component, pageProps, router }: AppProps) {
  globalCss(globalStyles)()
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0,viewport-fit=cover"
        />
      </Head>
      <ThemeProvider
        disableTransitionOnChange
        attribute="class"
        value={{ light: 'light-theme', dark: darkTheme.className }}
        defaultTheme="system"
      >
        <ToastProvider>
          <Container as="main" id="main">
            <Component {...pageProps} key={router.route} />
            <Toaster />
          </Container>
        </ToastProvider>
      </ThemeProvider>
    </>
  )
}

export default MyApp
