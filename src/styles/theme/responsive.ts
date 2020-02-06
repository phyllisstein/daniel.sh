import { generateMedia, pxToEm } from 'styled-media-query'

const breakpoints = pxToEm({
  lg: '992px',
  md: '768px',
  sm: '576px',
  xl: '1200px',
  xs: '0px',
}, 16)

export const query = generateMedia(breakpoints)
