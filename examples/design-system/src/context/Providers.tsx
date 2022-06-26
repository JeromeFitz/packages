import {
  ToastProvider,
  ToastViewport,
} from '@jeromefitz/design-system/src/components'
import { KBarProvider } from '@jeromefitz/design-system/src/custom'
import { darkTheme } from '@jeromefitz/design-system/src/lib/stitches.config'
import { ThemeProvider } from 'next-themes'

import { KBarPortal } from '../components/KBar'

const Providers = ({ children }) => {
  return (
    <ThemeProvider
      attribute="class"
      value={{ light: 'light-theme', dark: darkTheme?.className }}
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
  )
}

export { Providers }
