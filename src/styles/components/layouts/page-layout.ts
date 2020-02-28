import { Header as HeaderBase } from 'carbon-components-react'
import styled from 'styled-components'

export const Header = styled(HeaderBase)`
  ${ ({ theme }) => theme.typography.accentFamily }
`

export const PageRoot = styled.section`
  margin-top: 3rem;
`
