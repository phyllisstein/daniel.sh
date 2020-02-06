import { graphql, useStaticQuery } from 'gatsby'
import React, { FunctionComponent, useMemo } from 'react'
import { createGlobalStyle } from 'styled-components'
import { getWOFFs } from './util'

const FACES = [
  { src: 'MaisonNeueMono-Regular', style: 'normal', weight: 400 },
  { src: 'MaisonNeueMono-Italic', style: 'italic', weight: 400 },
  { src: 'MaisonNeueMono-Bold', style: 'normal', weight: 700 },
  { src: 'MaisonNeueMono-BoldItalic', style: 'italic', weight: 700 },
]

export const MaisonMono: FunctionComponent = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { name: { glob: "*MaisonNeueMono-*" } }) {
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
        font-family: 'Maison Neue Mono';
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
