const _ = require('lodash')
const { DateTime } = require('luxon')
const fs = require('fs')
const LodashPlugin = require('lodash-webpack-plugin')
const path = require('path')
const PnPPlugin = require('pnp-webpack-plugin')
const { promisify } = require('util')
const R = require('ramda')
const webpack = require('webpack')

const readFile = promisify(fs.readFile)

// ########################################################################## //
// ############################# Webpack Config ############################# //
// ########################################################################## //
const babelNamespace = async ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        'babel-runtime': '@babel/runtime',
      },
    },
  })
}

const cheapSourceMap = async ({ actions, stage }) => {
  if (stage === 'develop') {
    actions.setWebpackConfig({
      devtool: 'cheap-module-source-map',
    })
  }
}

const includeBanner = async ({ actions, stage }) => {
  if (/build/.test(stage)) {
    const banner = await readFile('config/banner.js', { encoding: 'utf8' })
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

const sass = async ({ actions, loaders, stage }) => {
  actions.setWebpackConfig({
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [
            loaders.miniCssExtract({
              hmr: /develop/.test(stage),
              insertAt: 'top',
            }),
            {
              loader: 'fast-css-loader',
            },
            loaders.postcss({
              sourceMap: false,
            }),
            {
              loader: 'fast-sass-loader',
              options: {
                includePaths: [
                  path.resolve('src'),
                ],
              },
            },
          ],
        },
      ],
    },
  })
}

const typescript = async ({ actions, loaders }) => {
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

const yarnPnP = async ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      plugins: [
        PnPPlugin,
      ],
    },
    resolveLoader: {
      plugins: [
        PnPPlugin.moduleLoader(module),
      ],
    },
  })
}

exports.onCreateWebpackConfig = R.converge(
  (...fns) => Promise.all(Array.from(fns)),
  [
    babelNamespace,
    cheapSourceMap,
    includeBanner,
    minifyLodash,
    resolveVendor,
    sass,
    typescript,
    yarnPnP,
  ],
)

// ########################################################################## //
// ############################# Resolve Config ############################# //
// ########################################################################## //
exports.resolvableExtensions = () => ['.ts', '.tsx', '.mdx', '.js', '.jsx', '.json']

// ########################################################################## //
// ############################## Node Creation ############################# //
// ########################################################################## //
const addSlug = async ({ actions, node }) => {
  if (node.internal.type === 'MarkdownRemark') {
    const slug = node.frontmatter.title
      ? _.kebabCase(node.frontmatter.title)
      : 'untitled'
    actions.createNodeField({
      name: 'slug',
      node,
      value: slug,
    })
  }
}

exports.onCreateNode = R.converge(
  (...fns) => Promise.all(Array.from(fns)),
  [
    addSlug,
  ],
)

// ########################################################################## //
// ############################## Page Creation ############################# //
// ########################################################################## //
const createBlogPages = async ({ actions, graphql }) => {
  const { data } = await graphql(`
    query {
      allFile(filter: {
        extension: { in: ["md", "mdown", "markdown"] },
        sourceInstanceName:  { eq: "blog" },
      }) {
        edges {
          node {
            childMarkdownRemark {
              fields {
                slug
              }
              frontmatter {
                date
              }
            }
          }
        }
      }
    }
  `)

  data.allFile.edges.forEach(({ node }) => {
    const timestamp = DateTime.fromISO(node.childMarkdownRemark.frontmatter.date).toFormat('yyyy/LL')

    actions.createPage({
      component: path.resolve('src/templates/blog-post.tsx'),
      context: {
        slug: node.childMarkdownRemark.fields.slug,
      },
      path: path.join('blog', timestamp, node.childMarkdownRemark.fields.slug),
    })
  })
}

exports.createPages = R.converge(
  (...fns) => Promise.all(Array.from(fns)),
  [
    createBlogPages,
  ],
)
