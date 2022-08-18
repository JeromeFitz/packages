import {
  ToastProvider,
  ToastViewport,
} from '@jeromefitz/design-system/src/components'
import { darkTheme } from '@jeromefitz/design-system/src/lib/stitches.config'
import { ThemeProvider } from 'next-themes'

import { CommandMenu } from '../components/CommandMenu'

const Providers = ({ children }) => {
  return (
    <ThemeProvider
      attribute="class"
      value={{ light: 'light-theme', dark: darkTheme?.className }}
      defaultTheme="system"
    >
      <ToastProvider duration={5000} swipeDirection="right" swipeThreshold={50}>
        {children}
        <CommandMenu />
        <ToastViewport />
      </ToastProvider>
    </ThemeProvider>
  )
}

export { Providers }
