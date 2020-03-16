const _ = require('lodash')
const { DateTime } = require('luxon')
const fs = require('fs').promises
const LodashPlugin = require('lodash-webpack-plugin')
const path = require('path')
const pMap = require('p-map')
const R = require('ramda')
const webpack = require('webpack')

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

const includeBanner = async ({ actions, stage }) => {
  if (/build/.test(stage)) {
    const banner = await fs.readFile('config/banner.js', { encoding: 'utf8' })
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

const reactGlobal = async ({ actions }) => {
  actions.setWebpackConfig({
    plugins: [
      new webpack.ProvidePlugin({
        React: 'react',
        ReactDOM: 'react-dom',
      }),
    ],
  })
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

const debugLog = async ({ getConfig }) => {
  const config = getConfig()
  const serialize = require('serialize-javascript')
  await fs.writeFile('webpack-config.js', serialize(config, { ignoreFunction: true, space: 2 }))
}

exports.onCreateWebpackConfig = R.converge(
  (...fns) => Promise.all(Array.from(fns)),
  [
    cheapSourceMap,
    // fastRefresh,
    includeBanner,
    minifyLodash,
    reactGlobal,
    resolveLocalModules,
    typescript,
    // debugLog,
  ],
)

// ########################################################################## //
// ############################# Resolve Config ############################# //
// ########################################################################## //
exports.resolvableExtensions = () => ['.ts', '.tsx', '.mdx', '.js', '.jsx', '.json']

// ########################################################################## //
// ############################## Node Creation ############################# //
// ########################################################################## //
const addHero = async ({ actions, node }) => {
  if (node.internal.type !== 'MarkdownRemark') {
    return
  }

  const hero = node.frontmatter.hero || 'hero'

  actions.createNodeField({
    name: 'hero',
    node,
    value: hero,
  })
}

const addSlug = async ({ actions, node }) => {
  if (node.internal.type !== 'MarkdownRemark') {
    return
  }

  const slug = node.frontmatter.title
    ? _.kebabCase(node.frontmatter.title)
    : 'untitled'

  actions.createNodeField({
    name: 'slug',
    node,
    value: slug,
  })
}

exports.onCreateNode = R.converge(
  (...fns) => Promise.all(Array.from(fns)),
  [
    addHero,
    addSlug,
  ],
)

// ########################################################################## //
// ############################## Page Creation ############################# //
// ########################################################################## //
const createBlogPages = async ({ actions, graphql }) => {
  const blogQuery = await graphql(`
    query {
      allFile(
        filter: {
          extension: { in: ["md", "mdown", "markdown"] }
          sourceInstanceName:  { eq: "blog" }
        }
      ) {
        nodes {
          childMarkdownRemark {
            fields {
              hero
              slug
            }
            frontmatter {
              date
            }
          }
          dir
        }
      }
    }
  `)

  await pMap(blogQuery.data.allFile.nodes, async node => {
    const timestamp = DateTime.fromISO(node.childMarkdownRemark.frontmatter.date).toFormat('yyyy/LL')
    const hero = path.join(node.dir, node.childMarkdownRemark.fields.hero)

    actions.createPage({
      component: path.resolve('src/templates/blog-post.tsx'),
      context: {
        hero,
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
