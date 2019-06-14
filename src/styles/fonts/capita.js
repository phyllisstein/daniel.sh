import { css, Global } from '@emotion/core'
import { graphql, useStaticQuery } from 'gatsby'
import R from 'ramda'
import React from 'react'

const FACES = [
  { src: 'Capita-ExtraLight', style: 'normal', weight: 200 },
  { src: 'Capita-ExtraLightItalic', style: 'italic', weight: 200 },
  { src: 'Capita-Light', style: 'normal', weight: 300 },
  { src: 'Capita-LightItalic', style: 'italic', weight: 300 },
  { src: 'Capita-Regular', style: 'normal', weight: 400 },
  { src: 'Capita-RegularItalic', style: 'italic', weight: 400 },
  { src: 'Capita-Medium', style: 'normal', weight: 500 },
  { src: 'Capita-MediumItalic', style: 'italic', weight: 500 },
  { src: 'Capita-Bold', style: 'normal', weight: 700 },
  { src: 'Capita-BoldItalic', style: 'italic', weight: 700 },
  { src: 'Capita-ExtraBold', style: 'normal', weight: 800 },
  { src: 'Capita-ExtraBoldItalic', style: 'italic', weight: 800 },
]

function Capita() {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { name: { glob: "*Capita*" } }) {
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
        font-family: 'Capita';
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

export default Capita
