import React, { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components';

interface PropsTheme {
  children: ReactNode
}

export type Colors = {
  theme: {
    colors: {
      white: string,
      darkGray: string,
      veryDarkBlue: string,
      veryLightGray: string,
    }
  }
}

const Theme = {
  colors: {
    white: 'hsl(0, 0%, 100%)',
    darkGray: 'hsl(0, 0%, 52%)',
    veryLightGray: 'hsl(0, 0%, 98%)',
    veryDarkBlue: 'hsl(200, 15%, 8%)'
  }
}

function GlobalThemeProvider({ children }: PropsTheme) {
  return (
    <ThemeProvider theme={Theme}>
      {children}
    </ThemeProvider>
  )
}

export default GlobalThemeProvider
