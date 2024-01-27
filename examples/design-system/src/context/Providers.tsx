import {
  ToastProvider,
  ToastViewport,
} from '@jeromefitz/design-system/src/components'
import { darkTheme } from '@jeromefitz/design-system/src/lib/stitches.config'

import { ThemeProvider } from 'next-themes'

const Providers = ({ children }) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      value={{ dark: darkTheme?.className, light: 'light-theme' }}
    >
      <ToastProvider duration={5000} swipeDirection="right" swipeThreshold={50}>
        {children}
        <ToastViewport />
      </ToastProvider>
    </ThemeProvider>
  )
}

export { Providers }
