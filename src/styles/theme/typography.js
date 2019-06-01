import ms from 'modularscale-js'

export const accentStack = ['Capita', 'Garamond', 'Times New Roman', 'Times', 'serif'].join(', ')
export const primaryStack = ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Helvetica', 'Arial', 'sans-serif'].join(', ')

/**
 * MODULAR SCALE
 * 15.981em
 * 12.788em
 * 11.302em
 * 9.044em
 * 7.993em
 * 6.396em
 * 5.653em
 * 4.523em
 * 3.998em
 * 3.199em
 * 2.827em
 * 2.262em
 * 1.999em
 * 1.6em
 * 1.414em
 * 1.132em
 * 1em
 * 0.8em
 * 0.707em
 * 0.566em
 * 0.5em
 * 0.4em
 * 0.354em
 */
export const scale = interval => ms(interval, {
  base: [1, 1.6],
  ratio: 1.414,
})
