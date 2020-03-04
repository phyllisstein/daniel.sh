/* eslint-disable react/no-multi-comp */

import { Provider } from 'templates/provider'
import React from 'react'
import { Root } from 'templates/root'

export const onClientEntry = () => {
  return Promise.all([
    typeof IntersectionObserver === 'undefined' ? import('intersection-observer') : Promise.resolve(),
    typeof ResizeObserver === 'undefined' ? import('resize-observer-polyfill') : Promise.resolve(),
    import('carbon.css'),
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
