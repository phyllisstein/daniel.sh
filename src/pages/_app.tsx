import { ThemeProvider } from 'styled-components'
import '@spectrum-css/page/dist/index-vars.css'
import '@spectrum-css/typography/dist/index-vars.css'
import '@spectrum-css/vars/dist/spectrum-dark.css'
import '@spectrum-css/vars/dist/spectrum-global.css'
import '@spectrum-css/vars/dist/spectrum-large.css'
import { AppProps } from 'next/app'
import Head from 'next/head'

import { AdobeClean, AdobeCleanSerif } from 'assets/adobe-clean'
import { Body } from 'styles/global'
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

function PortfolioApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Sandbox</title>
        <meta content='initial-scale=1.0, width=device-width' name='viewport' />
        <meta content='IE=edge' httpEquiv='X-UA-Compatible' />
      </Head>

      <ThemeProvider theme={theme}>
        <AdobeClean />
        <AdobeCleanSerif />
        <Body />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default PortfolioApp
