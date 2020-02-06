/* eslint-disable react/no-multi-comp */

const { Provider } = require('components/provider')
const React = require('react')
const { Root } = require('components/root')

exports.wrapPageElement = ({ element, props }) => (
  <Root { ...props }>
    { element }
  </Root>
)

exports.wrapRootElement = ({ element }) => (
  <Provider>
    { element }
  </Provider>
)
