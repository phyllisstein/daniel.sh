const fs = require('fs')
const LodashPlugin = require('lodash-webpack-plugin')
const path = require('path')
const { promisify } = require('util')
const R = require('ramda')
const webpack = require('webpack')

const readFile = promisify(fs.readFile)

exports.onCreateWebpackConfig = async ({ actions, getConfig, stage }) => {
  actions.setWebpackConfig({
    // plugins: [
    //   new webpack.NormalModuleReplacementPlugin(
    //     /core-js\/modules\/es(\d)\./,
    //     resource => {
    //       resource.request.replace(/core-js\/modules\/es(\d)\.(.*)$/g, (_match, esVersion, moduleName) => {
    //         const replacement = path.resolve(`node_modules/core-js/modules/es${ esVersion === '7' ? 'next' : '' }.${ moduleName }`)
    //         if (fs.existsSync(replacement)) {
    //           return replacement
    //         }

    //         return path.resolve('node_modules/lodash/noop')
    //       })
    //     },
    //   ),
    // ],
    resolve: {
      alias: {
        'babel-runtime': '@babel/runtime',
      },
      modules: [
        path.resolve('src'),
        path.resolve('node_modules'),
      ],
    },
  })
  
  // const coreConfig = getConfig()
  // coreConfig.resolve.alias['core-js'] = path.resolve('node_modules/core-js')
  // actions.replaceWebpackConfig(coreConfig)
  

  if (stage === 'develop') {
    const config = getConfig()
    config.module.rules = R.map(
      R.when(
        R.propEq('test', /\.jsx?$/),
        R.over(R.lensProp('use'), R.prepend('react-hot-loader/webpack')),
      ),
      config.module.rules,
    )
    actions.replaceWebpackConfig(config)
  }

  if (stage === 'build-javascript') {
    const banner = await readFile('src/vendor/banner.js', { encoding: 'utf8' })
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
