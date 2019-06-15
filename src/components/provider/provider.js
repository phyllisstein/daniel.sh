import React from 'react'
import { theme } from 'styles'
import { ThemeProvider } from 'emotion-theming'

function Provider({ children }) {
  return (
    <ThemeProvider theme={ theme }>
      { children }
    </ThemeProvider>
  )
}

export default Provider
