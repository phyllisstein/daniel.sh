import * as R from 'ramda'
import C from 'chroma-js'

export const js = {
  burnt: C('#ee7e59'),
  canada: C('#f5c25d'),
  candy: C('#ec687f'),
  granny: C('#9cdd96'),
  lilac: C('#a97ace'),
  text: C('#000').alpha(0.87),
  viking: C('#5cc9ee'),
}

type JSColors = typeof js

type CSSColors = { [k in keyof JSColors]: string }

export const css: CSSColors = R.map(R.invoker(0, 'css'), js)
