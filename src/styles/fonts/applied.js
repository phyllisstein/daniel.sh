import { css, Global } from '@emotion/core'
import { graphql, useStaticQuery } from 'gatsby'
import { getWOFFs } from './util'
import React from 'react'

const FACES = [
  { src: 'AppliedSansPro-Thin', style: 'normal', weight: 100 },
  { src: 'AppliedSansPro-ThinItalic', style: 'italic', weight: 100 },
  { src: 'AppliedSansPro-UltraLight', style: 'normal', weight: 200 },
  { src: 'AppliedSansPro-UltraLightItalic', style: 'italic', weight: 200 },
  { src: 'AppliedSansPro-Light', style: 'normal', weight: 300 },
  { src: 'AppliedSansPro-LightItalic', style: 'italic', weight: 300 },
  { src: 'AppliedSansPro-Regular', style: 'normal', weight: 400 },
  { src: 'AppliedSansPro-RegularItalic', style: 'italic', weight: 400 },
  { src: 'AppliedSansPro-Medium', style: 'normal', weight: 500 },
  { src: 'AppliedSansPro-MediumItalic', style: 'italic', weight: 500 },
  { src: 'AppliedSansPro-Bold', style: 'normal', weight: 700 },
  { src: 'AppliedSansPro-BoldItalic', style: 'italic', weight: 700 },
  { src: 'AppliedSansPro-Black', style: 'normal', weight: 800 },
  { src: 'AppliedSansPro-BlackItalic', style: 'italic', weight: 800 },
  { src: 'AppliedSansPro-UltraBlack', style: 'normal', weight: 800 },
  { src: 'AppliedSansPro-UltraBlackItalic', style: 'italic', weight: 800 },
]

function Applied() {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { name: { glob: "*AppliedSansPro*" } }) {
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
        font-family: 'Applied Sans Pro';
        font-style: ${ style };
        font-weight: ${ weight };
        src: url('${ woff.woff2 }') format('woff2'),
             url('${ woff.woff }') format('woff');
      }
    `
  })

  return (
    <Global
      styles={
        css`
          ${ decls.join('\n\n') }
        `
      } />
  )
}

export default Applied
