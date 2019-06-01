import styled from 'styled-components'

export const H = styled.h1`
  ${ ({ accent, theme, size }) => {
    const plumberSettings = {
      fontSize: theme.typography.scale(10 - size),
      lineHeight: theme.typography.scale(11 - size),
    }

    if (accent) {
      return theme.plumber.accent(plumberSettings)
    }

    return theme.plumber(plumberSettings)
  } }

  font-family: ${ ({ accent, theme }) => accent ? theme.typography.accentStack : theme.typography.primaryStack };
  font-weight: 300;
`
