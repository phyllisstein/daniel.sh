import { graphql, useStaticQuery } from 'gatsby'
import React, { FunctionComponent, useMemo } from 'react'
import { createGlobalStyle } from 'styled-components'
import { JetBrainsMonoFontQuery } from 'types/gatsby'
import R from 'ramda'

const FACES = [
  { name: 'JetBrainsMono-Regular', style: 'normal', weight: 400 },
  { name: 'JetBrainsMono-Italic', style: 'italic', weight: 400 },
  { name: 'JetBrainsMono-Medium', style: 'normal', weight: 500 },
  { name: 'JetBrainsMono-MediumItalic', style: 'italic', weight: 500 },
  { name: 'JetBrainsMono-Bold', style: 'normal', weight: 700 },
  { name: 'JetBrainsMono-BoldItalic', style: 'italic', weight: 700 },
  { name: 'JetBrainsMono-ExtraBold', style: 'normal', weight: 800 },
  { name: 'JetBrainsMono-ExtraBoldItalic', style: 'italic', weight: 800 },
]

export const JetBrainsMono: FunctionComponent = React.memo(() => {
  const data: JetBrainsMonoFontQuery = useStaticQuery(graphql`
    query JetBrainsMonoFont {
      allFile(filter: { name: { glob: "*JetBrainsMono-*" } }) {
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

  const decls = useMemo(() => {
    return FACES.map(({ name, style, weight }) => {
      const woff = R.pipe(
        R.pluck('node'),
        R.find(R.whereEq({ ext: '.woff', name })),
      )(data.allFile.edges)
      const woff2 = R.pipe(
        R.pluck('node'),
        R.find(R.whereEq({ ext: '.woff2', name })),
      )(data.allFile.edges)

      return `
        @font-face {
          font-display: fallback;
          font-family: 'JetBrains Mono';
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
