import ms from 'modularscale-js'

export const accentStack = ['IBM Plex Mono', 'Garamond', 'Times New Roman', 'Times', 'serif'].join(', ')

export const primaryStack = ['Applied Sans Pro', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Helvetica', 'Arial', 'sans-serif'].join(', ')

export const scale = interval => ms(interval + 2, {
  base: [1, 1.6],
  ratio: 1.414,
})
