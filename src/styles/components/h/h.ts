import styled from 'styled-components'

interface BaseProps {
  primaryType: boolean
  scaleUnit: 1 | 2 | 3 | 4 | 5 | 6
}

export const Base = styled.h1<BaseProps>`
  ${ ({ primaryType, theme }) => primaryType ? theme.typography.primary : theme.typography.accent }

  ${ ({ primaryType, scaleUnit, theme }) => {
    const plumberSettings = {
      fontSize: theme.scale.unitless(7 - scaleUnit),
      lineHeight: theme.scale.unitless(8 - scaleUnit),
    }

    if (primaryType) {
      return theme.plumber.primary(plumberSettings)
    }

    return theme.plumber.accent(plumberSettings)
  } }

  font-weight: 300;
`
