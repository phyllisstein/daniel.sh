import { css, Global } from '@emotion/core'
import { graphql, useStaticQuery } from 'gatsby'
import { getWOFFs } from './util'
import React from 'react'

const FACES = [
  { src: 'IBMPlexMono-Thin', style: 'normal', weight: 100 },
  { src: 'IBMPlexMono-ThinItalic', style: 'italic', weight: 100 },
  { src: 'IBMPlexMono-ExtraLight', style: 'normal', weight: 200 },
  { src: 'IBMPlexMono-ExtraLightItalic', style: 'italic', weight: 200 },
  { src: 'IBMPlexMono-Light', style: 'normal', weight: 300 },
  { src: 'IBMPlexMono-LightItalic', style: 'italic', weight: 300 },
  { src: 'IBMPlexMono-Text', style: 'normal', weight: 400 },
  { src: 'IBMPlexMono-TextItalic', style: 'italic', weight: 400 },
  { src: 'IBMPlexMono-Medium', style: 'normal', weight: 500 },
  { src: 'IBMPlexMono-MediumItalic', style: 'italic', weight: 500 },
  { src: 'IBMPlexMono-SemiBold', style: 'normal', weight: 600 },
  { src: 'IBMPlexMono-SemiBoldItalic', style: 'italic', weight: 600 },
  { src: 'IBMPlexMono-Bold', style: 'normal', weight: 700 },
  { src: 'IBMPlexMono-BoldItalic', style: 'italic', weight: 700 },
]

function PlexMono() {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { name: { glob: "*IBMPlexMono*" } }) {
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
        font-family: 'IBM Plex Mono';
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

export default PlexMono
