/* eslint-disable react/no-multi-comp */

import {
  Body,
  Root,
  Subtitle,
  Timestamp,
  Title,
  TitleRoot,
} from './blog-post-styles'
import { Grid, Row } from 'carbon-components-react'
import {
  H,
  P,
  PageLayout,
  SectionHeader,
} from 'components'
import React, { createElement, FunctionComponent } from 'react'
import { BlogPostQuery } from 'types/gatsby'
import { DateTime } from 'luxon'
import { graphql } from 'gatsby'
import rehype from 'rehype-parse'
import rehypeReact from 'rehype-react'
import unified from 'unified'

interface BlogPostProps {
  data: BlogPostQuery
}

const REHYPE_REACT_BODY = {
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

const REHYPE_REACT_TOC = {
  components: {
    p: P,
    ul: props => <ul { ...props } className='toc' />,
  },
  createElement,
  fragment: true,
}

const BlogPost: FunctionComponent<BlogPostProps> = ({ data }) => {
  const body = unified()
    .use(rehypeReact, REHYPE_REACT_BODY)
    .stringify(data.post.htmlAst)

  const { contents: toc } = unified()
    .use(rehype, { fragment: true })
    .use(rehypeReact, REHYPE_REACT_TOC)
    .processSync(data.post.tableOfContents)

  const { frontmatter } = data.post
  const timestamp = frontmatter.date && DateTime.fromISO(frontmatter.date).toFormat('cccc, d LLLL y')

  return (
    <PageLayout sectionName='Blog'>
      <Root>
        <SectionHeader>
          <TitleRoot>
            { timestamp && <Timestamp>{ timestamp }</Timestamp> }
            <div style={{ flex: '1 1 100%' }} />
            <Title>{ frontmatter.title }</Title>
            { frontmatter.subtitle && <Subtitle>{ frontmatter.subtitle }</Subtitle> }
          </TitleRoot>
        </SectionHeader>
        <Grid>
          <Row>
            <Body md={{ offset: 1, span: 6 }} xlg={{ offset: 3, span: 6 }}>
              { toc }
              { body }
            </Body>
          </Row>
        </Grid>
      </Root>
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
      tableOfContents(
        absolute: false
        maxDepth: 2
      )
    }
  }
`

export default BlogPost
