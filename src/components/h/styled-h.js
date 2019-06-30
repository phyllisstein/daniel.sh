import styled from 'styled-components'

export const BaseH = styled.h1`
  ${ ({ primaryType, scaleUnit, theme }) => {
    const plumberSettings = {
      fontSize: theme.typography.scale(7 - scaleUnit),
      lineHeight: theme.typography.scale(8 - scaleUnit),
    }

    if (primaryType) {
      return theme.plumber(plumberSettings)
    }

    return theme.plumber.accent(plumberSettings)
  } }

  ${ ({ theme }) => theme.typography.accent }

  ${ ({ primaryType, theme }) => primaryType && theme.typography.primary }

  font-weight: 300;
`
