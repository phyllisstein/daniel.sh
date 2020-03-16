import { graphql, useStaticQuery } from 'gatsby'
import React, { FunctionComponent, useMemo } from 'react'
import { createGlobalStyle } from 'styled-components'
import R from 'ramda'
import { SlateFontQuery } from 'types/gatsby'

const FACES = [
  { name: 'Slate-Thin', style: 'normal', weight: 100 },
  { name: 'Slate-ThinItalic', style: 'italic', weight: 100 },
  { name: 'Slate-ExtraLight', style: 'normal', weight: 200 },
  { name: 'Slate-ExtraLightItalic', style: 'italic', weight: 200 },
  { name: 'Slate-Light', style: 'normal', weight: 300 },
  { name: 'Slate-LightItalic', style: 'italic', weight: 300 },
  { name: 'Slate-Regular', style: 'normal', weight: 400 },
  { name: 'Slate-Italic', style: 'italic', weight: 400 },
  { name: 'Slate-Medium', style: 'normal', weight: 600 },
  { name: 'Slate-MediumItalic', style: 'italic', weight: 600 },
  { name: 'Slate-Bold', style: 'normal', weight: 700 },
  { name: 'Slate-BoldItalic', style: 'italic', weight: 700 },
  { name: 'Slate-Black', style: 'normal', weight: 800 },
  { name: 'Slate-BlackItalic', style: 'italic', weight: 800 },
]

export const Slate: FunctionComponent = React.memo(() => {
  const data: SlateFontQuery = useStaticQuery(graphql`
    query SlateFont {
      allFile(filter: { name: { glob: "*Slate*" } }) {
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
          font-family: 'Slate';
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
