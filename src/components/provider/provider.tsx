import * as theme from 'styles/theme'
import React, { FunctionComponent } from 'react'
import { ThemeProvider } from 'styled-components'

export const Provider: FunctionComponent = ({ children }) => {
  return (
    <ThemeProvider theme={ theme }>
      { children }
    </ThemeProvider>
  )
}
