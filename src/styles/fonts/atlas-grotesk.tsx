import { FontEdge, FontNode } from './util'
import { graphql, useStaticQuery } from 'gatsby'
import React, { FunctionComponent, useMemo } from 'react'
import { AtlasFontQuery } from 'types/gatsby'
import { createGlobalStyle } from 'styled-components'
import R from 'ramda'

const FACES = [
  { name: 'AtlasGrotesk-Thin', style: 'normal', weight: 200 },
  { name: 'AtlasGrotesk-ThinItalic', style: 'italic', weight: 200 },
  { name: 'AtlasGrotesk-Light', style: 'normal', weight: 300 },
  { name: 'AtlasGrotesk-LightItalic', style: 'italic', weight: 300 },
  { name: 'AtlasGrotesk-Regular', style: 'normal', weight: 400 },
  { name: 'AtlasGrotesk-RegularItalic', style: 'italic', weight: 400 },
  { name: 'AtlasGrotesk-Medium', style: 'normal', weight: 500 },
  { name: 'AtlasGrotesk-MediumItalic', style: 'italic', weight: 500 },
  { name: 'AtlasGrotesk-Bold', style: 'normal', weight: 700 },
  { name: 'AtlasGrotesk-BoldItalic', style: 'italic', weight: 700 },
  { name: 'AtlasGrotesk-Black', style: 'normal', weight: 800 },
  { name: 'AtlasGrotesk-BlackItalic', style: 'italic', weight: 800 },
]

export const AtlasGrotesk: FunctionComponent = () => {
  const data: AtlasFontQuery = useStaticQuery(graphql`
    query AtlasFont {
      allFile(filter: { name: { glob: "*AtlasGrotesk-*" } }) {
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

  const FontCSS = useMemo(() => {
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
          font-family: 'Atlas Grotesk';
          font-style: ${ style };
          font-weight: ${ weight };
          src: url('${ woff2.publicURL }') format('woff2'),
               url('${ woff.publicURL }') format('woff');
        }
      `
    })

    return createGlobalStyle`
      ${ decls.join('\n\n') }
    `
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <FontCSS />
  )
}
