import styled from 'styled-components'

interface BaseProps {
  primaryType: boolean
  scaleUnit: 1 | 2 | 3 | 4 | 5 | 6
}

export const Base = styled.h1<BaseProps>`
  ${ ({ primaryType, scaleUnit, theme }) => {
    const plumberSettings = {
      fontSize: theme.scale.unitless(6 - scaleUnit),
      leadingTop: theme.scale.unitless(scaleUnit - 5),
      lineHeight: theme.scale.unitless(6 - scaleUnit),
    }

    if (primaryType) {
      return theme.typography.primary(plumberSettings)
    }

    return theme.typography.accent(plumberSettings)
  } }
`
