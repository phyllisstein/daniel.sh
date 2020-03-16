import { graphql, useStaticQuery } from 'gatsby'
import React, { FunctionComponent, useMemo } from 'react'
import { createGlobalStyle } from 'styled-components'
import { MaisonMonoFontQuery } from 'types/gatsby'
import R from 'ramda'

const FACES = [
  { name: 'MaisonNeueMono-Regular', style: 'normal', weight: 400 },
  { name: 'MaisonNeueMono-Italic', style: 'italic', weight: 400 },
  { name: 'MaisonNeueMono-Bold', style: 'normal', weight: 700 },
  { name: 'MaisonNeueMono-BoldItalic', style: 'italic', weight: 700 },
]

export const MaisonMono: FunctionComponent = () => {
  const data = useStaticQuery(graphql`
    query MaisonMonoFontQuery {
      allFile(filter: { name: { glob: "*MaisonNeueMono-*" } }) {
        nodes {
          ext
          name
          publicURL
        }
      }
    }
  `)

  const decls = FACES.map(({ name, style, weight }) => {
    const woff = R.pipe(
      R.pluck('node'),
      R.find(R.whereEq({ ext: '.woff', name })),
    )(data.allFile.edges)
    const woff2 = R.pipe(
      R.pluck('node'),
      R.find(R.whereEq({ ext: '.woff2', name })),
    )(data.allFile.edges)

    return `
      @font-face {
        font-display: fallback;
        font-family: 'Maison Neue Mono';
        font-style: ${ style };
        font-weight: ${ weight };
        src: url('${ woff2.publicURL }') format('woff2'),
             url('${ woff.publicURL }') format('woff');
      }
    `
  })

  const FontCSS = useMemo(() => (
    createGlobalStyle`
      ${ decls.join('\n\n') }
    `
  ), []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <FontCSS />
  )
}
