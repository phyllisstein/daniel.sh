import React, { FunctionComponent } from 'react'
import theme from 'styles/theme'
import { ThemeProvider } from 'styled-components'

export const Provider: FunctionComponent = ({ children }) => {
  return (
    <ThemeProvider theme={ theme }>
      { children }
    </ThemeProvider>
  )
}
