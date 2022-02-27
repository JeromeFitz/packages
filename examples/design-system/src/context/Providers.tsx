import { KBarProvider } from '@jeromefitz/design-system/src/components'
import { ToastProvider, Toaster } from '@jeromefitz/design-system/src/custom/Toast'
import { darkTheme } from '@jeromefitz/design-system/src/stitches.config'
import { ThemeProvider } from 'next-themes'

import { KBarPortal } from '../components/KBar'
import { MediaContextProvider } from '../context/Media'

const Providers = ({ children }) => {
  return (
    <MediaContextProvider>
      <ThemeProvider
        disableTransitionOnChange
        attribute="class"
        value={{ light: 'light-theme', dark: darkTheme.className }}
        defaultTheme="system"
      >
        <ToastProvider>
          <KBarProvider>
            {children}
            <KBarPortal />
            <Toaster />
          </KBarProvider>
        </ToastProvider>
      </ThemeProvider>
    </MediaContextProvider>
  )
}

export { Providers }
