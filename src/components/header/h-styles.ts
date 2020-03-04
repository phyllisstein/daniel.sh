import styled from 'styled-components'

interface BaseProps {
  primaryType: boolean
  scaleUnit: 1 | 2 | 3 | 4 | 5 | 6
}

export const Base = styled.h1<BaseProps>`
  ${ ({ primaryType, scaleUnit, theme }) => {
    const plumberSettings = {
      fontSize: 7 - scaleUnit,
      leadingBottom: 1,
      leadingTop: theme.scale.unitless(9 - scaleUnit),
      lineHeight: 7 - scaleUnit,
    }

    if (primaryType) {
      return theme.typography.primary(plumberSettings)
    }

    return theme.typography.accent(plumberSettings)
  } }

  &:first-child {
    margin-top: 0;
  }
`
