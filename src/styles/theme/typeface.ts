import { css } from 'styled-components'

import {
  accent as plumberAccent,
  primary as plumberPrimary,
  PlumberProps,
} from './plumber'

export const accentFamily = css`
  font-family:
    'Charlie',
    'Georgia',
    'Garamond',
    'Times New Roman',
    'Times',
    serif;
`

export const accent = (plumberOpts: Partial<PlumberProps> = {}) => css`
  ${ accentFamily }
  ${ plumberAccent(plumberOpts) }
`

export const primaryFamily = css`
  font-family:
    'Maison Neue',
    -apple-system,
    BlinkMacSystemFont,
    'Helvetica Neue',
    'Helvetica',
    sans-serif;
`

export const primary = (plumberOpts: Partial<PlumberProps> = {}) => css`
  ${ primaryFamily }
  ${ plumberPrimary(plumberOpts) }
`
