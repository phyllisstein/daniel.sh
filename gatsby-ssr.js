/* eslint-disable react/no-multi-comp */

const { Provider } = require('templates/provider')
const React = require('react')
const { Root } = require('templates/root')

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
