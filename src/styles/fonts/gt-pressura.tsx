import * as R from 'ramda'
import { graphql, useStaticQuery } from 'gatsby'
import React, { FunctionComponent, useMemo } from 'react'
import { createGlobalStyle } from 'styled-components'
import { GTPressuraFontQuery } from 'types/gatsby'

const FACES = [
  { name: 'GTPressura-Light', style: 'normal', weight: 300 },
  { name: 'GTPressura-LightItalic', style: 'italic', weight: 300 },
  { name: 'GTPressura-Regular', style: 'normal', weight: 400 },
  { name: 'GTPressura-RegularItalic', style: 'italic', weight: 400 },
  { name: 'GTPressura-Bold', style: 'normal', weight: 700 },
  { name: 'GTPressura-BoldItalic', style: 'italic', weight: 700 },
]

export const GTPressura: FunctionComponent = () => {
  const data: GTPressuraFontQuery = useStaticQuery(graphql`
    query GTPressuraFontQuery {
      allFile(filter: { name: { glob: "*GTPressura*" } }) {
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
        font-family: 'Charlie Pro';
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
