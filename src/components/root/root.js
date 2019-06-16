import { Aptifer, Inter } from 'styles/fonts'
import { Children, Wrapper } from './styled'
import { css, Global, ThemeContext } from '@emotion/core'
import { customBlock, prism, reboot, reset } from 'styles/global'
import { graphql, useStaticQuery } from 'gatsby'
import React, { useContext } from 'react'
import { Helmet } from 'react-helmet'
import { hot } from 'react-hot-loader/root'

function Root({ children }) {
  const theme = useContext(ThemeContext)

  const data = useStaticQuery(graphql`
    query RootQuery {
      avatar: file(relativePath: {eq: "images/avatar.jpg"}) {
        childImageSharp {
          fb: resize(height: 630, width: 1200) {
            src
          }
          tw: resize(height: 675, width: 1200) {
            src
          }
        }
      }
      site {
        siteMetadata {
          description
          keywords
          title
        }
      }
    }
  `)

  return (
    <>
      <Aptifer />
      <Inter />
      <Global
        styles={
          css`
            ${ reboot() }
            ${ reset(theme) }
            ${ prism() }
            ${ customBlock() }
          `
        } />
      <Helmet defaultTitle={ data.site.siteMetadata.title } defer={ false } titleTemplate={ `%s | ${ data.site.siteMetadata.title }` }>
        <meta charSet='utf-8' />
        <meta content='width=device-width, initial-scale=1, shrink-to-fit=no' name='viewport' />

        { /* Useful Dev Tools */ }
        { /* <link href='//basehold.it/10' rel='stylesheet' /> */ }

        { /* Common Metadata */ }
        <meta content={ data.site.siteMetadata.description } name='description' />
        <meta content={ data.site.siteMetadata.keywords.join(',') } name='keywords' />

        { /* Facebook OpenGraph */ }
        <meta content={ data.site.siteMetadata.description } property='og:description' />
        <meta content={ data.avatar.childImageSharp.fb.src } property='og:image' />
        <meta content='en_US' property='og:locale' />
        <meta content={ data.site.siteMetadata.title } property='og:site_name' />
        <meta content={ data.site.siteMetadata.title } property='og:title' />
        <meta content='website' property='og:type' />

        { /* Twitter Cards */ }
        <meta content='summary' name='twitter:card' />
        <meta content={ data.site.siteMetadata.description } property='twitter:description' />
        <meta content='on' name='twitter:dnt' />
        <meta content={ data.avatar.childImageSharp.tw.src } property='twitter:image' />
        <meta content='@phyllisstein' name='twitter:site' />
        <meta content={ data.site.siteMetadata.title } property='twitter:title' />
      </Helmet>
      <Wrapper>
        <Children>
          { children }
        </Children>
      </Wrapper>
    </>
  )
}

export default hot(Root)
