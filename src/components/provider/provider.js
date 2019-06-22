import { StyleSheetManager, ThemeProvider } from 'styled-components'
import { hot } from 'react-hot-loader/root'
import React from 'react'
import theme from 'styles/theme'

function Provider({ children }) {
  return (
    <StyleSheetManager>
      <ThemeProvider theme={ theme }>
        { children }
      </ThemeProvider>
    </StyleSheetManager>
  )
}

export default hot(Provider)
