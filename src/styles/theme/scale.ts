import ms from 'modularscale-js'

export const rem = (step: number) => `${ unitless(step) }rem`

export const unitless = (step = 0): number => ms(step, {
  base: 1,
  ratio: 1.333,
})
