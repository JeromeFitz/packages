import { ToastProvider, Toaster } from '@jeromefitz/design-system/src/components'
import { darkTheme } from '@jeromefitz/design-system/src/stitches.config'
import { ThemeProvider } from 'next-themes'

import { KBarProviderApp } from '../components/KBar'
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
          <KBarProviderApp>
            {children}
            <Toaster />
          </KBarProviderApp>
        </ToastProvider>
      </ThemeProvider>
    </MediaContextProvider>
  )
}

export { Providers }
