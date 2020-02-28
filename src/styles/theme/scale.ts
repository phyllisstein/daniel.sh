import ms from 'modularscale-js'

export const rem = (step: number) => `${ unitless(step) }rem`

export const unitless = (step = 0): number => ms(step + 1, {
  base: 1,
  ratio: 1.2,
})
