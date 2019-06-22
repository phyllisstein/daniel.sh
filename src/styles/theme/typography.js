import { css } from 'styled-components'
import ms from 'modularscale-js'

export const accent = css`
  font-family: 'Charlie Pro', 'Garamond', 'Times New Roman', 'Times', serif;
`

export const mono = css`
  font-family: 'Maison Neue Mono', 'SFMono-Regular', 'Consolas', 'Liberation Mono', 'Menlo', 'Courier', monospace;
`

export const primary = css`
  font-family: 'Maison Neue', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica', 'Arial', sans-serif;
`

export const scale = ms(?, {
  base: [1, 1.6],
  ratio: 1.414,
})
