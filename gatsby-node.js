const fs = require('fs')
const LodashPlugin = require('lodash-webpack-plugin')
const path = require('path')
const { promisify } = require('util')
const webpack = require('webpack')

const readFile = promisify(fs.readFile)

exports.onCreatePage = ({ page, actions }) => {
  if (/^styled-/.test(path.basename(page.path))) {
    actions.deletePage(page)
  }
}

exports.onCreateWebpackConfig = async ({ actions, getConfig, stage }) => {
  actions.setWebpackConfig({
    plugins: [
      new LodashPlugin(),
    ],
    resolve: {
      modules: [
        path.resolve('src'),
        path.resolve('node_modules'),
      ],
    },
  })

  if (stage === 'build-javascript') {
    const banner = await readFile('static/banner.js', { encoding: 'utf8' })
    actions.setWebpackConfig({
      plugins: [
        new webpack.BannerPlugin({
          banner,
          entryOnly: false,
          raw: true,
        }),
      ],
    })
  }

  const config = getConfig()

  for (const [name, path] of Object.entries(config.entry)) {
    config.entry[name] = [].concat('@babel/polyfill', path)
  }

  actions.replaceWebpackConfig(config)
}
