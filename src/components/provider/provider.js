import { hot } from 'react-hot-loader/root'
import React from 'react'
import { theme } from 'styles'
import { ThemeProvider } from 'styled-components'

function Provider({ children }) {
  return (
    <ThemeProvider theme={ theme }>
      { children }
    </ThemeProvider>
  )
}

export default hot(Provider)
