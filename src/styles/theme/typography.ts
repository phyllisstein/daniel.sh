import { accent as plumberAccent, mono as plumberMono, PlumberOpts, primary as plumberPrimary} from './plumber'
import { css } from 'styled-components'

export const accent = (plumberOpts: PlumberOpts = {}) => css`
  ${ plumberAccent(plumberOpts) }
  ${ accentFamily }
`

export const accentFamily = css`
  font-family: 'Maison Neue', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica', 'Arial', sans-serif;
`

export const mono = (plumberOpts: PlumberOpts = {}) => css`
  ${ plumberMono(plumberOpts) }
  ${ monoFamily }
`

export const monoFamily = css`
  font-family: 'PragmataPro Liga', 'SFMono-Regular', 'Consolas', 'Liberation Mono', 'Menlo', 'Courier', monospace;
`

export const primary = (plumberOpts: PlumberOpts = {}) => css`
  ${ plumberPrimary(plumberOpts) }
  ${ primaryFamily }
`

export const primaryFamily = css`
  font-family: 'Charlie Pro', 'Garamond', 'Times New Roman', 'Times', serif;
`
