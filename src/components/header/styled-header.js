import styled from 'styled-components'

export const H = styled.h1`
  ${ ({ accent, theme, size }) => {
    const plumberSettings = {
      fontSize: 1.414 ** (7 - size),
      lineHeight: 7 - size,
    }

    if (accent) {
      return theme.plumber.accent(plumberSettings)
    }

    return theme.plumber(plumberSettings)
  } }

  font-family: ${ ({ accent, theme }) => accent ? theme.typography.accentStack : theme.typography.primaryStack };
  font-weight: 700;
`
