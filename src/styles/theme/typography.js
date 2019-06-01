import ms from 'modularscale-js'

export const accentStack = ['Capita', 'Garamond', 'Times New Roman', 'Times', 'serif'].join(', ')

export const primaryStack = ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Helvetica', 'Arial', 'sans-serif'].join(', ')

export const scale = interval => ms(interval, {
  base: [1, 1.6],
  ratio: 1.414,
})
