import C from 'chroma-js'
import R from 'ramda'

export const chroma = {
  aurora: C('#e882a7'),
  conch: C('#fc8c99'),
  coral: C('#ff6e60'),
  glow: C('#db773d'),
  haze: C('#9d436d'),
  hot: C('#e45781'),
  papaya: C('#fea066'),
  radiant: C('#fb9d21'),
}

export const rgb = R.map(R.invoker(0, 'css'), chroma)
