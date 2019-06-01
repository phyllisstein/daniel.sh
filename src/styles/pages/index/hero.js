import { Header as HeaderBase } from 'components'
import styled from 'styled-components'

export const H = styled(HeaderBase)`
  font-weight: 200;
`

// FIXME: Vertical rhythm gets a little screwy in a flex container.
export const Hero = styled.header`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  width: 100%;
`

export const Root = styled.section`
  height: 100%;
  width: 100%;
`
