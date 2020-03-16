import { FontEdge, FontNode } from './util'
import { graphql, useStaticQuery } from 'gatsby'
import React, { FunctionComponent, useMemo } from 'react'
import { CapitaFontQuery } from 'types/gatsby'
import { createGlobalStyle } from 'styled-components'
import R from 'ramda'

const FACES = [
  { name: 'Capita-ExtraLight', style: 'normal', weight: 200 },
  { name: 'Capita-ExtraLightItalic', style: 'italic', weight: 200 },
  { name: 'Capita-Light', style: 'normal', weight: 300 },
  { name: 'Capita-LightItalic', style: 'italic', weight: 300 },
  { name: 'Capita-Regular', style: 'normal', weight: 400 },
  { name: 'Capita-RegularItalic', style: 'italic', weight: 400 },
  { name: 'Capita-Medium', style: 'normal', weight: 500 },
  { name: 'Capita-MediumItalic', style: 'italic', weight: 500 },
  { name: 'Capita-Bold', style: 'normal', weight: 700 },
  { name: 'Capita-BoldItalic', style: 'italic', weight: 700 },
  { name: 'Capita-ExtraBold', style: 'normal', weight: 800 },
  { name: 'Capita-ExtraBoldItalic', style: 'italic', weight: 800 },
]

export const Capita: FunctionComponent = React.memo(() => {
  const data: CapitaFontQuery = useStaticQuery(graphql`
    query CapitaFont {
      allFile(filter: { name: { glob: "*Capita-*" } }) {
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
          font-family: 'Capita';
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
