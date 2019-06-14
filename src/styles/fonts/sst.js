import { css, Global } from '@emotion/core'
import { graphql, useStaticQuery } from 'gatsby'
import R from 'ramda'
import React from 'react'

const FACES = [
  { src: 'SST-UltraLight', style: 'normal', weight: 200 },
  { src: 'SST-UltraLightItalic', style: 'italic', weight: 200 },
  { src: 'SST-Light', style: 'normal', weight: 300 },
  { src: 'SST-LightItalic', style: 'italic', weight: 300 },
  { src: 'SST-Roman', style: 'normal', weight: 400 },
  { src: 'SST-Italic', style: 'italic', weight: 400 },
  { src: 'SST-Medium', style: 'normal', weight: 500 },
  { src: 'SST-MediumItalic', style: 'italic', weight: 500 },
  { src: 'SST-Bold', style: 'normal', weight: 700 },
  { src: 'SST-BoldItalic', style: 'italic', weight: 700 },
  { src: 'SST-Heavy', style: 'normal', weight: 800 },
  { src: 'SST-HeavyItalic', style: 'italic', weight: 800 },
]

function SST() {
  const data = useStaticQuery(graphql`
    query {
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

  const decls = FACES.map(({ src, style, weight }) => {
    const woff = R.pipe(
      R.pluck('node'),
      R.filter(R.propEq('name', src)),
      R.indexBy(
        R.pipe(
          R.prop('ext'),
          R.replace('.', ''),
        ),
      ),
      R.pluck('publicURL'),
    )(data.allFile.edges)

    return `
      @font-face {
        font-display: fallback;
        font-family: 'SST';
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

export default SST
