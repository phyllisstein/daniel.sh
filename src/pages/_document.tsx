import { Head, Html, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html className='spectrum spectrum--large spectrum--dark' dir='ltr'>
      <Head />
      <body>
        <Main />
        <NextScript />
        <Script src='/hyphenopoly.js' strategy='lazyOnload' type='text/javascript' />
      </body>
    </Html>
  )
}
