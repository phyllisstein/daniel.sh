import { graphql, useStaticQuery } from 'gatsby'
import { createGlobalStyle } from 'styled-components'
import R from 'ramda'
import React from 'react'

const FACES = [
  { src: 'Inter-Thin', style: 'normal', weight: 100 },
  { src: 'Inter-ThinItalic', style: 'italic', weight: 100 },
  { src: 'Inter-ExtraLight', style: 'normal', weight: 200 },
  { src: 'Inter-ExtraLightItalic', style: 'italic', weight: 200 },
  { src: 'Inter-Light', style: 'normal', weight: 300 },
  { src: 'Inter-LightItalic', style: 'italic', weight: 300 },
  { src: 'Inter-Regular', style: 'normal', weight: 400 },
  { src: 'Inter-Italic', style: 'italic', weight: 400 },
  { src: 'Inter-Medium', style: 'normal', weight: 500 },
  { src: 'Inter-MediumItalic', style: 'italic', weight: 500 },
  { src: 'Inter-SemiBold', style: 'normal', weight: 600 },
  { src: 'Inter-SemiBoldItalic', style: 'italic', weight: 600 },
  { src: 'Inter-Bold', style: 'normal', weight: 700 },
  { src: 'Inter-BoldItalic', style: 'italic', weight: 700 },
  { src: 'Inter-ExtraBold', style: 'normal', weight: 800 },
  { src: 'Inter-ExtraBoldItalic', style: 'italic', weight: 800 },
  { src: 'Inter-Black', style: 'normal', weight: 900 },
  { src: 'Inter-BlackItalic', style: 'italic', weight: 900 },
]

function Inter() {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { name: { glob: "*Inter*" } }) {
        nodes {
          ext
          name
          publicURL
        }
      }
    }
  `)

  const decls = FACES.map(({ src, style, weight }) => {
    const woff = R.pipe(
      R.filter(R.propEq('name', src)),
      R.indexBy(
        R.pipe(
          R.prop('ext'),
          R.replace('.', ''),
        ),
      ),
      R.pluck('publicURL'),
    )(data.allFile.nodes)

    return `
      @font-face {
        font-display: fallback;
        font-family: 'Inter';
        font-style: ${ style };
        font-weight: ${ weight };
        src: url('${ woff.woff2 }') format('woff2'),
             url('${ woff.woff }') format('woff');
      }
    `
  })

  const FontFace = createGlobalStyle`
    ${ decls.join('\n\n') }
  `

  return (
    <FontFace />
  )
}

export default Inter
