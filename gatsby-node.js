const fs = require('fs')
const LodashPlugin = require('lodash-webpack-plugin')
const path = require('path')
const { promisify } = require('util')
const webpack = require('webpack')

const readFile = promisify(fs.readFile)

exports.onCreateWebpackConfig = async ({ actions, stage }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        'core-js': path.resolve('node_modules/core-js'),
      },
      modules: [
        path.resolve('src'),
        path.resolve('node_modules'),
      ],
    },
  })

  if (stage === 'develop') {
    actions.setWebpackConfig({
      resolve: {
        alias: {
          'react-dom': '@hot-loader/react-dom',
        },
      },
    })
  }

  if (stage === 'build-javascript') {
    const banner = await readFile('static/banner.js', { encoding: 'utf8' })
    actions.setWebpackConfig({
      plugins: [
        new LodashPlugin(),
        new webpack.BannerPlugin({
          banner,
          entryOnly: false,
          raw: true,
        }),
      ],
    })
  }
}
