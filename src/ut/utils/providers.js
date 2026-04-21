'use client'
import { ThemeProvider as NextThemesProvider } from 'next-themes'

export default function Providers({ children, ...props }) {
  return <NextThemesProvider defaultTheme="dark" {...props}>{children}</NextThemesProvider>
}
