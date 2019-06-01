/* eslint-disable react/no-multi-comp */

import Provider from 'components/provider'
import React from 'react'
import { Root } from 'components'
import { theme } from 'styles'
import { ThemeProvider } from 'styled-components'

export const onClientEntry = () => {
  return Promise.all([
    import('vendor/styles/semantic.min.css'),
    typeof window.IntersectionObserver === 'undefined' ? import('intersection-observer') : Promise.resolve(),
  ])
}

export const wrapPageElement = ({ element, props }) => (
  <Root { ...props }>
    { element }
  </Root>
)

export const wrapRootElement = ({ element }) => (
  <Provider>
    { element }
  </Provider>
)
