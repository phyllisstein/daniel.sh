import 'styled-components'
import * as elevation from './elevation'
import * as measure from './measure'
import * as palette from './palette'
import * as plumber from './plumber'
import * as responsive from './responsive'
import * as scale from './scale'
import * as typography from './typography'
import { animation } from './animation'

const theme = {
  animation,
  elevation,
  measure,
  palette,
  plumber,
  responsive,
  scale,
  typography,
}

export type Theme = typeof theme

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}

export default theme
