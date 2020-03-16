import { graphql, useStaticQuery } from 'gatsby'
import React, { FunctionComponent, useMemo } from 'react'
import { createGlobalStyle } from 'styled-components'
import { PragmataProFontQuery } from 'types/gatsby'
import R from 'ramda'

const FACES = [
  { name: 'PragmataProLiga-Regular', style: 'normal', weight: 400 },
  { name: 'PragmataProLiga-Italic', style: 'italic', weight: 400 },
  { name: 'PragmataProLiga-Bold', style: 'normal', weight: 700 },
  { name: 'PragmataProLiga-BoldItalic', style: 'italic', weight: 700 },
]

export const PragmataPro: FunctionComponent = React.memo(() => {
  const data: PragmataProFontQuery = useStaticQuery(graphql`
    query PragmataProFont {
      allFile(filter: { name: { glob: "*PragmataPro*" } }) {
        nodes {
          ext
          name
          publicURL
        }
      }
    }
  `)

  const decls = useMemo(() => {
    return FACES.map(({ name, style, weight }) => {
      const woff = R.find(R.whereEq({ ext: '.woff', name }), data.allFile.nodes)
      const woff2 = R.find(R.whereEq({ ext: '.woff2', name }), data.allFile.nodes)

      return `
        @font-face {
          font-display: fallback;
          font-family: 'PragmataPro Liga';
          font-style: ${ style };
          font-weight: ${ weight };
          src: url('${ woff2.publicURL }') format('woff2'),
               url('${ woff.publicURL }') format('woff');
        }
      `
    })
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  const FontCSS = createGlobalStyle`
    ${ decls.join('\n\n') }
  `

  return (
    <FontCSS />
  )
})
