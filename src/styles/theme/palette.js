import C from 'chroma-js'
import R from 'ramda'

export const chroma = {
  ashenWind: C('#97a7b3'),
  bloomingDahlia: C('#eb9486'),
  blueIntrigue: C('#7e7f9a'),
  icedAvocado: C('#cae7b9'),
  lemonTart: C('#f3de8a'),
}

export const rgb = R.map(R.invoker(0, 'css'), chroma)
