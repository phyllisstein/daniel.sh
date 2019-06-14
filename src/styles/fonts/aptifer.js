import { css, Global } from '@emotion/core'
import { graphql, useStaticQuery } from 'gatsby'
import R from 'ramda'
import React from 'react'

const FACES = [
  { src: 'AptiferSlabLTPro-Thin', style: 'normal', weight: 200 },
  { src: 'AptiferSlabLTPro-ThinIt', style: 'italic', weight: 200 },
  { src: 'AptiferSlabLTPro-Light', style: 'normal', weight: 300 },
  { src: 'AptiferSlabLTPro-LightIt', style: 'italic', weight: 300 },
  { src: 'AptiferSlabLTPro-Regular', style: 'normal', weight: 400 },
  { src: 'AptiferSlabLTPro-It', style: 'italic', weight: 400 },
  { src: 'AptiferSlabLTPro-Medium', style: 'normal', weight: 500 },
  { src: 'AptiferSlabLTPro-MediumIt', style: 'italic', weight: 500 },
  { src: 'AptiferSlabLTPro-Semibold', style: 'normal', weight: 600 },
  { src: 'AptiferSlabLTPro-SemiboldIt', style: 'italic', weight: 600 },
  { src: 'AptiferSlabLTPro-Bold', style: 'normal', weight: 700 },
  { src: 'AptiferSlabLTPro-BoldIt', style: 'italic', weight: 700 },
  { src: 'AptiferSlabLTPro-Black', style: 'normal', weight: 800 },
  { src: 'AptiferSlabLTPro-BlackIt', style: 'italic', weight: 800 },
]

function AptiferSlab() {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { name: { glob: "*AptiferSlab*" } }) {
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
        font-family: 'Aptifer Slab';
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

export default React.memo(AptiferSlab)
