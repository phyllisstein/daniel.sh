import * as R from 'ramda'
import C from 'chroma-js'
import { g90 } from '@carbon/themes'

const carbon = {
  inverse01: C(g90.inverse01),
  inverse02: C(g90.inverse02),
  overlay01: C(g90.overlay01),
  text01: C(g90.text01),
  text02: C(g90.text02),
  text03: C(g90.text03),
  text05: C(g90.text05),
  ui01: C(g90.ui01),
  ui02: C(g90.ui02),
  ui03: C(g90.ui03),
  ui05: C(g90.ui05),
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
  ...carbon,
  ...rainbow,
}

type JSColors = typeof js

type CSSColors = { [k in keyof JSColors]: string }

export const css: CSSColors = R.map(R.invoker(0, 'css'), js)
