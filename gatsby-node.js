const _ = require('lodash')
const { DateTime } = require('luxon')
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
const cheapSourceMap = async ({ actions, stage }) => {
  if (stage === 'develop') {
    actions.setWebpackConfig({
      devtool: 'cheap-module-source-map',
    })
  }
}

const hotLoader = async ({ actions, getConfig, stage }) => {
  if (stage === 'develop') {
    actions.setWebpackConfig({
      resolve: {
        alias: {
          'react-dom': '@hot-loader/react-dom',
        },
      },
    })

    const config = getConfig()
    config.entry = R.map(
      entrypoint => Array.isArray(entrypoint) ? ['react-hot-loader/patch', ...entrypoint] : ['react-hot-loader/patch', entrypoint],
      config.entry,
    )
    actions.replaceWebpackConfig(config)
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

const resolveLocalModules = async ({ actions }) => {
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

exports.onCreateWebpackConfig = R.converge(
  (...fns) => Promise.all(Array.from(fns)),
  [
    cheapSourceMap,
    hotLoader,
    includeBanner,
    minifyLodash,
    resolveLocalModules,
    typescript,
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
