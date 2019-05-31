import { hsl } from 'chroma-js'
import R from 'ramda'

export const chroma = {
  aurora: hsl(338, 0.69, 0.71),
  conch: hsl(353, 0.95, 0.77),
  coral: hsl(5, 1, 0.69),
  glow: hsl(22, 0.69, 0.55),
  haze: hsl(332, 0.4, 0.44),
  hot: hsl(342, 0.73, 0.62),
  papaya: hsl(23, 0.99, 0.7),
  radiant: hsl(34, 0.97, 0.56),
}

export const rgb = R.map(R.invoker(0, 'css'), chroma)
