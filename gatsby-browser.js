/* eslint-disable react/no-multi-comp */

import { Provider, Root } from 'components'
import React from 'react'

export const onClientEntry = () => {
  return Promise.all([
    import('@atlaskit/css-reset/dist/bundle.css'),
    typeof IntersectionObserver === 'undefined' ? import('intersection-observer') : Promise.resolve(),
    typeof ResizeObserver === 'undefined' ? import('resize-observer-polyfill') : Promise.resolve(),
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
