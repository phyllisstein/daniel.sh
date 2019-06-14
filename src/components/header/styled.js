import isPropValid from '@emotion/is-prop-valid'
import styled from '@emotion/styled'

export const H = styled('h1', {
  shouldForwardProp: propName => isPropValid(propName) && !['accent', 'size'].includes(propName),
})`
  ${ ({ accent, theme, size }) => {
    const plumberSettings = {
      fontSize: theme.typography.scale(7 - size),
      lineHeight: theme.typography.scale(7 - size),
    }

    if (accent) {
      return theme.plumber.accent(plumberSettings)
    }

    return theme.plumber(plumberSettings)
  } }

  font-family: ${ ({ accent, theme }) => accent ? theme.typography.accentStack : theme.typography.primaryStack };
  font-weight: 300;
`
