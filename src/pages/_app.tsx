/* eslint-disable import/order */
import '@spectrum-css/vars/dist/spectrum-global.css'
import '@spectrum-css/vars/dist/spectrum-dark.css'
import '@spectrum-css/vars/dist/spectrum-medium.css'
import '@spectrum-css/vars/dist/spectrum-large.css'
import '@spectrum-css/tokens/dist/index.css'
import '@spectrum-css/typography/dist/index-vars.css'
import '@spectrum-css/page/dist/index-vars.css'

import '@spectrum-css/actionbutton/dist/index-vars.css'
import '@spectrum-css/button/dist/index-vars.css'
import '@spectrum-css/card/dist/index-vars.css'
import '@spectrum-css/icon/dist/index-vars.css'
import '@spectrum-css/quickaction/dist/index-vars.css'
/* eslint-enable import/order */

import { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'

import { Charlie } from 'assets/charlie'
import { MaisonNeue } from 'assets/maison-neue'
import { Body, Preflight } from 'styles/global'
import { theme } from 'styles/theme'

declare global {
  interface Window {
    Hyphenopoly: {
      config: (...args: unknown[]) => void
      hyphenators: {
        HTML: Promise<(el: HTMLElement, sel?: string) => void>
      }
    }
  }
}

const description = 'Personal blog and portfolio for Daniel Shannon, software engineer and essayist.'
const keywords = [
  'engineer',
  'full stack engineer',
  'software architect',
  'software developer',
  'web developer',
  'digital media',
]
const title = 'Daniel Shannon—Engineer, Essayist, Architect, Aesthete'

function PortfolioApp ({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Full-Stack Software Engineer • Technical Lead • Digital Media Developer | Daniel P. Shannon</title>
        <meta content='initial-scale=1.0, width=device-width' name='viewport' />
        <meta content='IE=edge' httpEquiv='X-UA-Compatible' />

        { /* Common Metadata */ }
        <meta content={ description } name='description' />
        <meta content={ keywords.join(', ') } name='keywords' />

        { /* Facebook OpenGraph */ }
        <meta content={ description } property='og:description' />
        <meta content='/social-icon.png' property='og:image' />
        <meta content='en_US' property='og:locale' />
        <meta content={ title } property='og:site_name' />
        <meta content={ title } property='og:title' />
        <meta content='website' property='og:type' />

        { /* Twitter Cards */ }
        <meta content='summary' name='twitter:card' />
        <meta content={ description } property='twitter:description' />
        <meta content='on' name='twitter:dnt' />
        <meta content='/social-icon.png' property='twitter:image' />
        <meta content='@phyllisstein' name='twitter:site' />
        <meta content={ title } property='twitter:title' />
      </Head>

      <ThemeProvider theme={ theme }>
        <Preflight />
        <MaisonNeue />
        <Charlie />
        <Body />
        <Component { ...pageProps } />
      </ThemeProvider>
    </>
  )
}

export default PortfolioApp
