import { css, Global } from '@emotion/core'
import { graphql, useStaticQuery } from 'gatsby'
import R from 'ramda'
import React from 'react'

const FACES = [
  { src: 'Graphik-Thin', style: 'normal', weight: 100 },
  { src: 'Graphik-ThinItalic', style: 'italic', weight: 100 },
  { src: 'Graphik-Extralight', style: 'normal', weight: 200 },
  { src: 'Graphik-ExtralightItalic', style: 'italic', weight: 200 },
  { src: 'Graphik-Light', style: 'normal', weight: 300 },
  { src: 'Graphik-LightItalic', style: 'italic', weight: 300 },
  { src: 'Graphik-Regular', style: 'normal', weight: 400 },
  { src: 'Graphik-RegularItalic', style: 'italic', weight: 400 },
  { src: 'Graphik-Medium', style: 'normal', weight: 500 },
  { src: 'Graphik-MediumItalic', style: 'italic', weight: 500 },
  { src: 'Graphik-Semibold', style: 'normal', weight: 600 },
  { src: 'Graphik-SemiboldItalic', style: 'italic', weight: 600 },
  { src: 'Graphik-Bold', style: 'normal', weight: 700 },
  { src: 'Graphik-BoldItalic', style: 'italic', weight: 700 },
  { src: 'Graphik-Black', style: 'normal', weight: 800 },
  { src: 'Graphik-BlackItalic', style: 'italic', weight: 800 },
  { src: 'Graphik-Super', style: 'normal', weight: 900 },
  { src: 'Graphik-SuperItalic', style: 'italic', weight: 900 },
]

function Graphik() {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { name: { glob: "*Graphik*" } }) {
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
        font-family: 'Graphik';
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

export default Graphik
