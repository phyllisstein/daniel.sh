const fs = require('fs')
const LodashPlugin = require('lodash-webpack-plugin')
const path = require('path')
const { promisify } = require('util')
const R = require('ramda')
const webpack = require('webpack')

const readFile = promisify(fs.readFile)

// ########################################################################## //
// ############################# Webpack Config ############################# //
// ########################################################################## //
const includeBanner = async ({ actions, stage }) => {
  if (/build/.test(stage)) {
    const banner = await readFile('vendor/banner.js', { encoding: 'utf8' })
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
}

const minifyLodash = async ({ actions, stage }) => {
  if (/build/.test(stage)) {
    actions.setWebpackConfig({
      plugins: [
        new LodashPlugin({
          placeholders: true,
        }),
      ],
    })
  }
}

const resolveVendor = async ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [
        path.resolve('src'),
        path.resolve('vendor'),
        path.resolve('node_modules'),
      ],
    },
  })
}

const useBabelNamespace = async ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        'babel-runtime': '@babel/runtime',
      },
    },
  })
}

const useTypeScript = async ({ actions, loaders }) => {
  const jsLoader = loaders.js()

  actions.setWebpackConfig({
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: jsLoader,
        },
      ],
    },
    resolve: {
      extensions: [
        '.ts',
        '.tsx',
        '.mdx',
        '.js',
        '.jsx',
        '.json',
      ],
    },
  })
}

exports.onCreateWebpackConfig = R.converge(
  (...fns) => Promise.all(Array.from(fns)),
  [
    includeBanner,
    minifyLodash,
    resolveVendor,
    useBabelNamespace,
    useTypeScript,
  ],
)

// ########################################################################## //
// ############################# Resolve Config ############################# //
// ########################################################################## //
exports.resolvableExtensions = () => ['.ts', '.tsx', '.mdx', '.js', '.jsx', '.json']
