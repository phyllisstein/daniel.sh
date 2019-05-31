import { graphql, useStaticQuery } from 'gatsby'
import { createGlobalStyle } from 'styled-components'
import R from 'ramda'
import React from 'react'

const FACES = [
  { src: 'AcuminPro-Thin', style: 'normal', weight: 100 },
  { src: 'AcuminPro-ThinItalic', style: 'italic', weight: 100 },
  { src: 'AcuminPro-ExtraLight', style: 'normal', weight: 200 },
  { src: 'AcuminPro-ExtraLightItalic', style: 'italic', weight: 200 },
  { src: 'AcuminPro-Light', style: 'normal', weight: 300 },
  { src: 'AcuminPro-LightItalic', style: 'italic', weight: 300 },
  { src: 'AcuminPro-Regular', style: 'normal', weight: 400 },
  { src: 'AcuminPro-Italic', style: 'italic', weight: 400 },
  { src: 'AcuminPro-Medium', style: 'normal', weight: 500 },
  { src: 'AcuminPro-MediumItalic', style: 'italic', weight: 500 },
  { src: 'AcuminPro-Semibold', style: 'normal', weight: 600 },
  { src: 'AcuminPro-SemiboldItalic', style: 'italic', weight: 600 },
  { src: 'AcuminPro-Bold', style: 'normal', weight: 700 },
  { src: 'AcuminPro-BoldItalic', style: 'italic', weight: 700 },
  { src: 'AcuminPro-Black', style: 'normal', weight: 800 },
  { src: 'AcuminPro-BlackItalic', style: 'italic', weight: 800 },
  { src: 'AcuminPro-UltraBlack', style: 'normal', weight: 900 },
  { src: 'AcuminPro-UltraBlackItalic', style: 'italic', weight: 900 },
]

function Acumin() {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { name: { glob: "*Acumin*" } }) {
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
        font-family: 'Acumin Pro';
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

export default Acumin
