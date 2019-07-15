import { StyleSheetManager, ThemeProvider } from 'styled-components'
import React from 'react'
import theme from 'styles/theme'

function Provider({ children }) {
  return (
    <ThemeProvider theme={ theme }>
      { children }
    </ThemeProvider>
  )
}

export default Provider
