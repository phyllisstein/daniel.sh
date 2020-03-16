/* eslint-disable @typescript-eslint/camelcase */

const path = require('path')

module.exports = {
  plugins: [
    {
      options: {
        minify: /production/.test(process.env.NODE_ENV),
        pure: /production/.test(process.env.NODE_ENV),
        transpileTemplateLiterals: /production/.test(process.env.NODE_ENV),
      },
      resolve: 'gatsby-plugin-styled-components',
    },
    {
      options: {
        name: 'blog',
        path: path.resolve('content/blog'),
      },
      resolve: 'gatsby-source-filesystem',
    },
    {
      options: {
        name: 'work',
        path: path.resolve('content/work'),
      },
      resolve: 'gatsby-source-filesystem',
    },
    {
      options: {
        name: 'assets',
        path: path.resolve('content/assets'),
      },
      resolve: 'gatsby-source-filesystem',
    },
    {
      options: {
        name: 'vendor-assets',
        path: path.resolve('vendor/assets'),
      },
      resolve: 'gatsby-source-filesystem',
    },
    {
      options: {
        excerpt_separator: '<!-- excerpt -->',
        plugins: [
          {
            options: {
              linkImagesToOriginal: false,
              maxWidth: 1024,
              showCaptions: false,
              sizeByPixelDensity: true,
              tracedSVG: true,
              withWebp: true,
            },
            resolve: 'gatsby-remark-images',
          },
          {
            options: {
              related: false,
            },
            resolve: 'gatsby-remark-embed-video',
          },
          'gatsby-remark-responsive-iframe',
          'gatsby-remark-header-ids',
          'gatsby-remark-external-links',
          {
            options: {
              directory: path.resolve('content/examples'),
            },
            resolve: 'gatsby-remark-embed-snippet',
          },
          {
            options: {
              inlineCodeMarker: '›',
            },
            resolve: 'gatsby-remark-prismjs',
          },
          {
            options: {
              blocks: {
                danger: {
                  classes: 'danger',
                  title: 'optional',
                },
                info: {
                  classes: 'info',
                  title: 'optional',
                },
                note: {
                  classes: 'note',
                  title: 'optional',
                },
                warning: {
                  classes: 'warning',
                  title: 'optional',
                },
              },
            },
            resolve: 'gatsby-remark-custom-blocks',
          },
          'gatsby-remark-emojis',
          {
            options: {
              dashes: 'oldschool',
            },
            resolve: 'gatsby-remark-smartypants',
          },
          'gatsby-remark-reading-time',
        ],
        tableOfContents: {
          absolute: false,
          maxDepth: 3,
        },
      },
      resolve: 'gatsby-transformer-remark',
    },
    'gatsby-transformer-javascript-frontmatter',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-catch-links',
    {
      options: {
        color: '#5cc9ee',
        easing: 'ease-out',
      },
      resolve: 'gatsby-plugin-nprogress',
    },
    'gatsby-plugin-remove-trailing-slashes',
    {
      options: {
        fileName: 'vendor/types/gatsby.ts',
      },
      resolve: 'gatsby-plugin-graphql-codegen',
    },
    {
      resolve: 'gatsby-transformer-sqip',
    },
    {
      options: {
        cachePublic: true,
      },
      resolve: 'gatsby-plugin-netlify-cache',
    },
  ],
  siteMetadata: {
    author: 'Daniel Shannon',
    description: 'Personal blog and portfolio for Daniel Shannon, software engineer and essayist.', // FIXME: Boring.
    keywords: [
      'engineer',
      'full stack engineer',
      'software architecture',
      'software developer',
      'web developer',
    ],
    shortTitle: 'daniel.sh',
    siteUrl: 'https://daniel.sh',
    social: {
      twitter: 'phyllisstein',
    },
    title: 'Daniel Shannon—Engineer, Essayist, Aesthete',
  },
}
