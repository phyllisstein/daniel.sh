import { graphql, useStaticQuery } from 'gatsby'
import React, { FunctionComponent, useMemo } from 'react'
import { createGlobalStyle } from 'styled-components'
import { getWOFFs } from './util'

const FACES = [
  { src: 'CharliePro-Hairline', style: 'normal', weight: 100 },
  { src: 'CharliePro-HairlineItalic', style: 'italic', weight: 100 },
  { src: 'CharliePro-Thin', style: 'normal', weight: 200 },
  { src: 'CharliePro-ThinItalic', style: 'italic', weight: 200 },
  { src: 'CharliePro-Light', style: 'normal', weight: 300 },
  { src: 'CharliePro-LightItalic', style: 'italic', weight: 300 },
  { src: 'CharliePro-Regular', style: 'normal', weight: 400 },
  { src: 'CharliePro-RegularItalic', style: 'italic', weight: 400 },
  { src: 'CharliePro-Medium', style: 'normal', weight: 500 },
  { src: 'CharliePro-MediumItalic', style: 'italic', weight: 500 },
  { src: 'CharliePro-Semibold', style: 'normal', weight: 600 },
  { src: 'CharliePro-SemiboldItalic', style: 'italic', weight: 600 },
  { src: 'CharliePro-Bold', style: 'normal', weight: 700 },
  { src: 'CharliePro-BoldItalic', style: 'italic', weight: 700 },
  { src: 'CharliePro-Black', style: 'normal', weight: 800 },
  { src: 'CharliePro-BlackItalic', style: 'italic', weight: 800 },
]

export const Charlie: FunctionComponent = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { name: { glob: "*CharliePro-*" } }) {
        edges {
          node {
            ext
            name
            publicURL
          }
        }
      }
    }
  `)

  const woffs = getWOFFs(data.allFile.edges)

  const decls = FACES.map(({ src, style, weight }) => {
    const woff = woffs[src]

    return `
      @font-face {
        font-display: fallback;
        font-family: 'Charlie Pro';
        font-style: ${ style };
        font-weight: ${ weight };
        src: url('${ woff.woff2 }') format('woff2'),
             url('${ woff.woff }') format('woff');
      }
    `
  })

  const FontCSS = useMemo(() => (
    createGlobalStyle`
      ${ decls.join('\n\n') }
    `
  ), ['']) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <FontCSS />
  )
}
