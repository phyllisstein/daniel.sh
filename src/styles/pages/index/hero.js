import HeaderBase from 'components/header'
import styled from 'styled-components'

export const H = styled(HeaderBase)`
  font-weight: 200;
`

// FIXME: Vertical rhythm gets a little screwy in a flex container.
export const Hero = styled.header`
  align-items: flex-start;
  background-color: white;
  border: 1rem solid ${ ({ theme }) => theme.palette.rgb.icedAvocado };
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  padding: 1rem;
  width: 100%;
`

export const Nav = styled.nav`
  align-items: center;
  display: flex;
  justify-content: center;
`

export const Root = styled.section`
  height: 100%;
  width: 100%;
`
