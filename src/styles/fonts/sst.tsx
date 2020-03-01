import { graphql, useStaticQuery } from 'gatsby'
import React, { FunctionComponent, useMemo } from 'react'
import { createGlobalStyle } from 'styled-components'
import R from 'ramda'
import { SSTFontQuery } from 'types/gatsby'

const FACES = [
  { name: 'SST-UltraLight', style: 'normal', weight: 200 },
  { name: 'SST-UltraLightItalic', style: 'italic', weight: 200 },
  { name: 'SST-Light', style: 'normal', weight: 300 },
  { name: 'SST-LightItalic', style: 'italic', weight: 300 },
  { name: 'SST-Roman', style: 'normal', weight: 400 },
  { name: 'SST-Italic', style: 'italic', weight: 400 },
  { name: 'SST-Medium', style: 'normal', weight: 500 },
  { name: 'SST-MediumItalic', style: 'italic', weight: 500 },
  { name: 'SST-Bold', style: 'normal', weight: 700 },
  { name: 'SST-BoldItalic', style: 'italic', weight: 700 },
  { name: 'SST-Heavy', style: 'normal', weight: 800 },
  { name: 'SST-HeavyItalic', style: 'italic', weight: 800 },
]

export const SST: FunctionComponent = React.memo(() => {
  const data: SSTFontQuery = useStaticQuery(graphql`
    query SSTFont {
      allFile(filter: { name: { glob: "*SST*" } }) {
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

  const decls = useMemo(() => {
    return FACES.map(({ name, style, weight }) => {
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
          font-family: 'SST';
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
