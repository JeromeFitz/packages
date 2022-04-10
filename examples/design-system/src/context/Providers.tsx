import {
  KBarProvider,
  ToastProvider,
  ToastViewport,
} from '@jeromefitz/design-system/src/components'
import { darkTheme } from '@jeromefitz/design-system/src/stitches.config'
import { ThemeProvider } from 'next-themes'

import { KBarPortal } from '../components/KBar'

const Providers = ({ children }) => {
  return (
    <>
      <ThemeProvider
        attribute="class"
        value={{ light: 'light-theme', dark: darkTheme.className }}
        defaultTheme="system"
      >
        <ToastProvider duration={5000} swipeDirection="right" swipeThreshold={50}>
          {/* @todo(react-18) */}
          {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
          {/* @ts-ignore */}
          <KBarProvider>
            {children}
            <KBarPortal />
            <ToastViewport />
          </KBarProvider>
        </ToastProvider>
      </ThemeProvider>
    </>
  )
}

export { Providers }
