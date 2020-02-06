import * as plumber from './plumber'
import { css } from 'styled-components'

export const accent = css`
  ${ plumber.accent() }
  font-family: 'Charlie Pro', 'Garamond', 'Times New Roman', 'Times', serif;
`

export const mono = css`
  ${ plumber.mono() }
  font-family: 'Maison Neue Mono', 'SFMono-Regular', 'Consolas', 'Liberation Mono', 'Menlo', 'Courier', monospace;
`

export const primary = css`
  ${ plumber.primary() }
  font-family: 'Maison Neue', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica', 'Arial', sans-serif;
`
