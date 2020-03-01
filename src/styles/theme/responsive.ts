import { generateMedia, pxToEm } from 'styled-media-query'

const breakpoints = pxToEm({
  lg: '1056px',
  max: '1584px',
  md: '672px',
  sm: '320px',
  xlg: '1312px',
}, 16)

export const query = generateMedia(breakpoints)
