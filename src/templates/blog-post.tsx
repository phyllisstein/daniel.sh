/* eslint-disable react/no-multi-comp */

import {
  BlogPostRoot,
  Subtitle,
  Timestamp,
  Title,
  TitleRoot,
} from 'styles/templates/blog-post'
import {
  H,
  Header,
  P,
  PageLayout,
  Segment,
} from 'components'
import React, { createElement, FunctionComponent } from 'react'
import { BlogPostQuery } from 'types/gatsby'
import { DateTime } from 'luxon'
import { graphql } from 'gatsby'
import markdown from 'remark-parse'
import rehypeReact from 'rehype-react'
import remarkRehype from 'remark-rehype'
import unified from 'unified'

interface BlogPostProps {
  data: BlogPostQuery
}

const REHYPE_REACT_OPTIONS = {
  components: {
    figure: props => <div { ...props } />,
    h1: props => <H { ...props } size={ 1 } />,
    h2: props => <H { ...props } size={ 2 } />,
    h3: props => <H { ...props } size={ 3 } />,
    h4: props => <H { ...props } size={ 4 } />,
    h5: props => <H { ...props } size={ 5 } />,
    h6: props => <H { ...props } size={ 6 } />,
    p: P,
  },
  createElement,
  fragment: true,
}

const BlogPost: FunctionComponent<BlogPostProps> = ({ data }) => {
  const body = unified()
    .use(rehypeReact, REHYPE_REACT_OPTIONS)
    .stringify(data.post.htmlAst)

  const { contents: toc } = unified()
    .use(markdown)
    .use(remarkRehype)
    .use(rehypeReact, REHYPE_REACT_OPTIONS)
    .processSync(data.post.tableOfContents)

  const { frontmatter } = data.post
  const timestamp = frontmatter.date && DateTime.fromISO(frontmatter.date).toFormat('cccc, d LLLL y')

  return (
    <PageLayout sectionName='Blog'>
      <BlogPostRoot>
        <Header>
          <TitleRoot>
            { timestamp && <Timestamp>{ timestamp }</Timestamp> }
            <Title>{ frontmatter.title }</Title>
            { frontmatter.subtitle && <Subtitle>{ frontmatter.subtitle }</Subtitle> }
          </TitleRoot>
        </Header>
        { toc }
        { body }
      </BlogPostRoot>
    </PageLayout>
  )
}

export const query = graphql`
  query BlogPost($slug: String!) {
    post: markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        date
        subtitle
        title
      }
      htmlAst
      tableOfContents
    }
  }
`

export default BlogPost
