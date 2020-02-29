import { graphql, Link, useStaticQuery } from 'gatsby'
import { Header, PageRoot } from './page-layout-styles'
import {
  HeaderMenuItem,
  HeaderName,
  HeaderNavigation,
} from 'carbon-components-react'
import React, { FunctionComponent } from 'react'
import { PageLayoutQuery } from 'types/gatsby'

interface PageLayoutProps {
  sectionName: string
}

export const PageLayout: FunctionComponent<PageLayoutProps> = ({ children, sectionName }) => {
  const data: PageLayoutQuery = useStaticQuery(graphql`
    query PageLayout {
      site {
        siteMetadata {
          shortTitle
        }
      }
    }
  `)

  return (
    <PageRoot>
      <Header>
        <HeaderName href='/' prefix={ data.site.siteMetadata.shortTitle }>
          { sectionName }
        </HeaderName>
        <HeaderNavigation>
          <HeaderMenuItem element={ Link } to='/blog'>
            Blog
          </HeaderMenuItem>
          <HeaderMenuItem element={ Link } to='/contact'>
            Contact
          </HeaderMenuItem>
        </HeaderNavigation>
      </Header>
      { children }
    </PageRoot>
  )
}
