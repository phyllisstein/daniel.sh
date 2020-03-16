import C from 'chroma-js'
import { g90 as carbon } from '@carbon/themes'
import R from 'ramda'

const carbonPalette = {
  interactive01: C(carbon.interactive01),
  interactive02: C(carbon.interactive02),
  interactive03: C(carbon.interactive03),
  interactive04: C(carbon.interactive04),
  inverse01: C(carbon.inverse01),
  inverse02: C(carbon.inverse02),
  overlay01: C(carbon.overlay01),
  text01: C(carbon.text01),
  text02: C(carbon.text02),
  text03: C(carbon.text03),
  text04: C(carbon.text04),
  text05: C(carbon.text05),
  ui01: C(carbon.ui01),
  ui02: C(carbon.ui02),
  ui03: C(carbon.ui03),
  ui04: C(carbon.ui04),
  ui05: C(carbon.ui05),
  uiBackground: C(carbon.uiBackground),
}

const rainbow = {
  burnt: C('#ee7e59'),
  canada: C('#f5c25d'),
  candy: C('#ec687f'),
  granny: C('#9cdd96'),
  lilac: C('#a97ace'),
  viking: C('#5cc9ee'),
}

export const js = {
  ...carbonPalette,
  ...rainbow,
}

export type JSColors = typeof js

export type CSSColors = { [k in keyof JSColors]: string }

export const css: CSSColors = R.map(R.invoker(0, 'css'), js)
