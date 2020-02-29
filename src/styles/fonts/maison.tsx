import * as R from 'ramda'
import { graphql, useStaticQuery } from 'gatsby'
import React, { FunctionComponent, useMemo } from 'react'
import { createGlobalStyle } from 'styled-components'
import { MaisonFontQuery } from 'types/gatsby'

const FACES = [
  { name: 'MaisonNeue-ExtraThin', style: 'normal', weight: 100 },
  { name: 'MaisonNeue-ExtraThinItalic', style: 'italic', weight: 100 },
  { name: 'MaisonNeue-Thin', style: 'normal', weight: 200 },
  { name: 'MaisonNeue-ThinItalic', style: 'italic', weight: 200 },
  { name: 'MaisonNeue-Light', style: 'normal', weight: 300 },
  { name: 'MaisonNeue-LightItalic', style: 'italic', weight: 300 },
  { name: 'MaisonNeue-Book', style: 'normal', weight: 400 },
  { name: 'MaisonNeue-BookItalic', style: 'italic', weight: 400 },
  { name: 'MaisonNeue-Medium', style: 'normal', weight: 500 },
  { name: 'MaisonNeue-MediumItalic', style: 'italic', weight: 500 },
  { name: 'MaisonNeue-Demi', style: 'normal', weight: 600 },
  { name: 'MaisonNeue-DemiItalic', style: 'italic', weight: 600 },
  { name: 'MaisonNeue-Bold', style: 'normal', weight: 700 },
  { name: 'MaisonNeue-BoldItalic', style: 'italic', weight: 700 },
  { name: 'MaisonNeue-ExtraBold', style: 'normal', weight: 800 },
  { name: 'MaisonNeue-ExtraBoldItalic', style: 'italic', weight: 800 },
  { name: 'MaisonNeue-Black', style: 'normal', weight: 900 },
  { name: 'MaisonNeue-BlackItalic', style: 'italic', weight: 900 },
]

export const Maison: FunctionComponent = () => {
  const data = useStaticQuery(graphql`
    query MaisonFontQuery {
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
        font-family: 'Maison Neue';
        font-style: ${ style };
        font-weight: ${ weight };
        src: url('${ woff2.publicURL }'); format('woff2'),
             url('${ woff.publicURL }'); format('woff');
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
