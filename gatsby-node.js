const path = require('path')

exports.onCreateWebpackConfig = ({ actions, getConfig }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [
        path.resolve('src'),
        path.resolve('node_modules'),
      ],
    },
  })

  const config = getConfig()

  for (const [name, path] of Object.entries(config.entry)) {
    config.entry[name] = [].concat('@babel/polyfill', path)
  }

  actions.replaceWebpackConfig(config)
}
