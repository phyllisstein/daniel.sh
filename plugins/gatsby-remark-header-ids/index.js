const _ = require('lodash')
const mdastString = require('mdast-util-to-string')
const slugs = require('github-slugger')()
const visit = require('unist-util-visit')

module.exports = function remarkHeaders({ markdownAST }) {
  slugs.reset()

  visit(markdownAST, 'heading', n => {
    const str = mdastString(n)
    const slug = slugs.slug(str, false)
    const id = _.deburr(slug)

    n.data = { ...n.data, id }
    n.data.htmlAttributes = { ...n.data.htmlAttributes, id }
    n.data.hProperties = { ...n.data.hProperties, id }
  })

  return markdownAST
}
