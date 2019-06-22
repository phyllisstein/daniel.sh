import styled from 'styles/styled-components'

export const BaseH = styled('h1', {
  omitPropsByName: ['primary', 'size'],
})`
  ${ ({ primary, theme, size }) => {
    const plumberSettings = {
      fontSize: theme.typography.scale(7 - size),
      lineHeight: theme.typography.scale(8 - size),
    }

    if (primary) {
      return theme.plumber(plumberSettings)
    }

    return theme.plumber.accent(plumberSettings)
  } }

  ${ ({ theme }) => theme.typography.accent }

  ${ ({ primary, theme }) => primary && theme.typography.primary }

  font-weight: 300;
`
