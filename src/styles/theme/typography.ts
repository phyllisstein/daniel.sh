import { accent as plumberAccent, mono as plumberMono, PlumberOpts, primary as plumberPrimary} from './plumber'
import { css } from 'styled-components'

export const accent = (plumberOpts: PlumberOpts = {}) => css`
  ${ plumberAccent(plumberOpts) }
  font-family: 'Charlie Pro', 'Garamond', 'Times New Roman', 'Times', serif;
`

export const mono = (plumberOpts: PlumberOpts = {}) => css`
  ${ plumberMono(plumberOpts) }
  font-family: 'Maison Neue Mono', 'SFMono-Regular', 'Consolas', 'Liberation Mono', 'Menlo', 'Courier', monospace;
`

export const primary = (plumberOpts: PlumberOpts = {}) => css`
  ${ plumberPrimary(plumberOpts) }
  font-family: 'Maison Neue', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica', 'Arial', sans-serif;
`
