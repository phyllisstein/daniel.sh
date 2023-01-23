import '@spectrum-css/page/dist/index-vars.css'
import '@spectrum-css/typography/dist/index-vars.css'
import '@spectrum-css/vars/dist/spectrum-dark.css'
import '@spectrum-css/vars/dist/spectrum-global.css'
import '@spectrum-css/vars/dist/spectrum-large.css'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'

import { AdobeClean, AdobeCleanSerif } from 'assets/adobe-clean'
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
        <title>Daniel P. Shannon | Full-Stack Software Engineer &amp; Technical Lead</title>
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
        <AdobeClean />
        <AdobeCleanSerif />
        <Body />
        <Component { ...pageProps } />
      </ThemeProvider>
    </>
  )
}

export default PortfolioApp
