import isPropValid from '@emotion/is-prop-valid'
import styled from '@emotion/styled'

export const BaseH = styled('h1', {
  shouldForwardProp: propName => isPropValid(propName) && !['primary', 'size'].includes(propName),
})`
  ${ ({ primary, theme, size }) => {
    const plumberSettings = {
      fontSize: theme.typography.scale(7 - size),
      lineHeight: theme.typography.scale(7 - size),
    }

    if (primary) {
      return theme.plumber(plumberSettings)
    }

    return theme.plumber.accent(plumberSettings)
  } }

  font-family: ${ ({ primary, theme }) => primary ? theme.typography.primaryStack : theme.typography.accentStack };
  font-weight: 400;
`
