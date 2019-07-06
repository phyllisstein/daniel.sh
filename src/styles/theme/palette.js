import C from 'chroma-js'
import R from 'ramda'

export const chroma = {
  affair: C('#7f4788'),
  havelock: C('#508cca'),
  mandy: C('#df4e65'),
  sin: C('#faae41'),
  tango: C('#f48222'),
  tree: C('#71c391'),
}

export const rgb = R.map(R.invoker(0, 'css'), chroma)
