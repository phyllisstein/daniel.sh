import C from 'chroma-js'
import R from 'ramda'

export const chroma = {
  avocado: C('#cae7b9'),
  dahlia: C('#eb9486'),
  intrigue: C('#7e7f9a'),
  tart: C('#f3de8a'),
  white: C('#ede7f6'),
  wind: C('#97a7b3'),
}

export const rgb = R.map(R.invoker(0, 'css'), chroma)
