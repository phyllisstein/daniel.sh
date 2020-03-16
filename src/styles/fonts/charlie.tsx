import { FontEdge, FontNode } from './util'
import { graphql, useStaticQuery } from 'gatsby'
import React, { FunctionComponent, useMemo } from 'react'
import { CharlieFontQuery } from 'types/gatsby'
import { createGlobalStyle } from 'styled-components'
import R from 'ramda'

const FACES = [
  { name: 'CharliePro-Hairline', style: 'normal', weight: 100 },
  { name: 'CharliePro-HairlineItalic', style: 'italic', weight: 100 },
  { name: 'CharliePro-Thin', style: 'normal', weight: 200 },
  { name: 'CharliePro-ThinItalic', style: 'italic', weight: 200 },
  { name: 'CharliePro-Light', style: 'normal', weight: 300 },
  { name: 'CharliePro-LightItalic', style: 'italic', weight: 300 },
  { name: 'CharliePro-Regular', style: 'normal', weight: 400 },
  { name: 'CharliePro-RegularItalic', style: 'italic', weight: 400 },
  { name: 'CharliePro-Medium', style: 'normal', weight: 500 },
  { name: 'CharliePro-MediumItalic', style: 'italic', weight: 500 },
  { name: 'CharliePro-Semibold', style: 'normal', weight: 600 },
  { name: 'CharliePro-SemiboldItalic', style: 'italic', weight: 600 },
  { name: 'CharliePro-Bold', style: 'normal', weight: 700 },
  { name: 'CharliePro-BoldItalic', style: 'italic', weight: 700 },
  { name: 'CharliePro-Black', style: 'normal', weight: 800 },
  { name: 'CharliePro-BlackItalic', style: 'italic', weight: 800 },
]

export const Charlie: FunctionComponent = React.memo(() => {
  const data: CharlieFontQuery = useStaticQuery(graphql`
    query CharlieFont {
      allFile(filter: { name: { glob: "*CharliePro-*" } }) {
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
          font-family: 'Charlie Pro';
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
