export const primaryStack = ['Capita', 'Garamond', 'Times New Roman', 'Times', 'serif'].join(', ')
export const primary = `
  font-family: serif;

  html.primary & {
    font-family: ${ ({ theme }) => theme.typography.primaryStack };
  }
`

export const accentStack = ['Acumin Pro', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Helvetica', 'Arial', 'sans-serif'].join(', ')
export const accent = `
  font-family: sans-serif;

  html.accent & {
    font-family: ${ ({ theme }) => theme.typography.accentStack };
  }
`
