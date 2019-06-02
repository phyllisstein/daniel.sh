import styled from 'styled-components'

export const H = styled.h1`
  ${ ({ accentType, theme, interval }) => {
    const plumberSettings = {
      fontSize: theme.typography.scale(7 - interval),
      lineHeight: theme.typography.scale(7 - interval),
    }

    if (accentType) {
      return theme.plumber.accent(plumberSettings)
    }

    return theme.plumber(plumberSettings)
  } }

  font-family: ${ ({ accentType, theme }) => accentType ? theme.typography.accentStack : theme.typography.primaryStack };
  font-weight: 300;
`
