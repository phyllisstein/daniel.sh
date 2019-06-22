import { graphql, useStaticQuery } from 'gatsby'
import React, { useMemo } from 'react'
import { createGlobalStyle } from 'styled-components'
import { getWOFFs } from './util'

const FACES = [
  { src: 'MaisonNeue-ExtraThin', style: 'normal', weight: 100 },
  { src: 'MaisonNeue-ExtraThinItalic', style: 'italic', weight: 100 },
  { src: 'MaisonNeue-Thin', style: 'normal', weight: 200 },
  { src: 'MaisonNeue-ThinItalic', style: 'italic', weight: 200 },
  { src: 'MaisonNeue-Light', style: 'normal', weight: 300 },
  { src: 'MaisonNeue-LightItalic', style: 'italic', weight: 300 },
  { src: 'MaisonNeue-Book', style: 'normal', weight: 400 },
  { src: 'MaisonNeue-BookItalic', style: 'italic', weight: 400 },
  { src: 'MaisonNeue-Medium', style: 'normal', weight: 500 },
  { src: 'MaisonNeue-MediumItalic', style: 'italic', weight: 500 },
  { src: 'MaisonNeue-Demi', style: 'normal', weight: 600 },
  { src: 'MaisonNeue-DemiItalic', style: 'italic', weight: 600 },
  { src: 'MaisonNeue-Bold', style: 'normal', weight: 700 },
  { src: 'MaisonNeue-BoldItalic', style: 'italic', weight: 700 },
  { src: 'MaisonNeue-ExtraBold', style: 'normal', weight: 800 },
  { src: 'MaisonNeue-ExtraBoldItalic', style: 'italic', weight: 800 },
  { src: 'MaisonNeue-Black', style: 'normal', weight: 900 },
  { src: 'MaisonNeue-BlackItalic', style: 'italic', weight: 900 },
]

function Maison() {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { name: { glob: "*MaisonNeue-*" } }) {
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
        font-family: 'Maison Neue';
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

export default React.memo(Maison)
