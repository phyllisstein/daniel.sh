/* eslint-disable react/no-multi-comp */

import {
  Body,
  Root,
  Subtitle,
  Timestamp,
  Title,
  TitleRoot,
} from './blog-post-styles'
import { Column, Grid, Row } from 'components/grid'
// import { Column, Grid, Row } from 'carbon-components-react'
import {
  PageLayout,
  SectionHeader,
} from 'components/layout'
import React, { createElement, Fragment, FunctionComponent } from 'react'
import { TOC, TOCItem } from 'components/toc'
import { BlogPostQuery } from 'types/gatsby'
import { DateTime } from 'luxon'
import GithubSlugger from 'github-slugger'
import { graphql } from 'gatsby'
import { H } from 'components/header'
import Img from 'gatsby-img'
import { P } from 'components/paragraph'
import R from 'ramda'
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
  Fragment,
}

const slugger = new GithubSlugger()

const BlogPost: FunctionComponent<BlogPostProps> = ({ data }) => {
  const body = unified()
    .use(rehypeReact, REHYPE_REACT_BODY)
    .stringify(data.post.htmlAst)

  const timestampDate = data.post.frontmatter.date && DateTime.fromISO(data.post.frontmatter.date).toFormat('cccc, d LLLL y')
  const timestampReading = data.post.fields.readingTime.text
  const timestamp = [timestampDate, timestampReading]
    .filter(Boolean)
    .join(' • ')

  const tocItems = R.map(
    ({ depth, value }) => {
      const slug = slugger.slug(value)
      return <TOCItem depth={ depth } key={ slug } slug={ slug }>{ value }</TOCItem>
    },
    data.post.headings,
  )

  return (
    <PageLayout sectionName='Blog'>
      <Root>
        <SectionHeader>
          <TitleRoot>
            <Timestamp>{ timestamp }</Timestamp>
            <div style={{ flex: '1 1 100%' }} />
            <Title>{ data.post.frontmatter.title }</Title>
            { data.post.frontmatter.subtitle && <Subtitle>{ data.post.frontmatter.subtitle }</Subtitle> }
          </TitleRoot>
        </SectionHeader>
        <Grid>
          <Row>
            <Column lg={{ offset: 2, span: 12 }} md={{ offset: 1, span: 6 }} xlg={{ offset: 4, span: 8 }}>
              <TOC>
                { tocItems }
              </TOC>
            </Column>
          </Row>
          <Row>
            <Column lg={{ offset: 2, span: 12 }} md={{ offset: 1, span: 6 }} xlg={{ offset: 4, span: 8 }}>
              { body }
            </Column>
          </Row>
        </Grid>
      </Root>
    </PageLayout>
  )
}

export const query = graphql`
  query BlogPost($hero: String!, $slug: String!) {
    hero: file(
      absolutePath: { eq: $hero }
    ) {
      image: childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
        sqip {
          dataURI
        }
      }
    }
    post: markdownRemark(
      fields: { slug: { eq: $slug } }
    ) {
      fields {
        readingTime {
          text
        }
      }
      frontmatter {
        date
        subtitle
        title
      }
      headings {
        depth
        value
      }
      htmlAst
    }
  }
`

export default BlogPost
