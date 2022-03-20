import {
  KBarProvider,
  ToastProvider,
  ToastViewport,
} from '@jeromefitz/design-system/src/components'
import { darkTheme } from '@jeromefitz/design-system/src/stitches.config'
import { ThemeProvider } from 'next-themes'

import { KBarPortal } from '../components/KBar'
import { MediaContextProvider } from '../context/Media'

const Providers = ({ children }) => {
  return (
    <MediaContextProvider>
      <ThemeProvider
        attribute="class"
        value={{ light: 'light-theme', dark: darkTheme.className }}
        defaultTheme="system"
      >
        <ToastProvider duration={5000} swipeDirection="right" swipeThreshold={50}>
          <KBarProvider>
            {children}
            <KBarPortal />
            <ToastViewport />
          </KBarProvider>
        </ToastProvider>
      </ThemeProvider>
    </MediaContextProvider>
  )
}

export { Providers }
