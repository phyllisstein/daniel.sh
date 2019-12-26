const fs = require('fs')
const LodashPlugin = require('lodash-webpack-plugin')
const path = require('path')
const { promisify } = require('util')
const R = require('ramda')
const webpack = require('webpack')

const readFile = promisify(fs.readFile)

/***********************************************************************************************
 *
 * Webpack Config
 *
 */

const includeBanner = async ({ actions, stage }) => {
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

const injectHotLoader = async ({ actions, getConfig, stage }) => {
    if (stage === 'develop') {
        const config = getConfig()
        config.module.rules = R.map(
            R.when(
                R.propSatisfies(p => String(p) === String(/\.jsx?$/) || String(p) === String(/\.[jt]sx?$/), 'test'),
                R.over(R.lensProp('use'), R.prepend('react-hot-loader/webpack')),
            ),
            config.module.rules,
        )
        actions.replaceWebpackConfig(config)
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

const useTypeScript = async ({ actions, getConfig }) => {
    const config = getConfig()
    config.module.rules = R.map(
        R.when(
            R.propSatisfies(p => String(p) === String(/\.jsx?$/), 'test'),
            R.assoc('test', /\.([jt])sx?$/),
        ),
        config.module.rules,
    )
    actions.replaceWebpackConfig(config)

    actions.setWebpackConfig({
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
        includeBanner, injectHotLoader, resolveVendor, useBabelNamespace,
        useTypeScript,
    ],
)

/***********************************************************************************************
 *
 * Extensions
 *
 */

exports.resolvableExtensions = () => [
    '.ts', '.tsx', '.mdx', '.js', '.jsx', '.json',
]
