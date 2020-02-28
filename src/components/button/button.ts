import { Button as ButtonBase } from 'carbon-components-react'
import styled from 'styled-components'

export const Button = styled(ButtonBase)`
  ${ ({ theme }) => theme.typography.accent() }
` as typeof ButtonBase
