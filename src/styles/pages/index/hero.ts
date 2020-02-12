import styled from 'styled-components'

// FIXME: Rhythm gets a little screwy w/ vertical centering.
export const Hero = styled.header`
  align-items: stretch;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  position: relative;
  width: 100%;

  ${ ({ theme }) => theme.responsive.query.lessThan('md')`
    text-align: center;
  ` }
`

export const Nav = styled.nav`
  align-items: center;
  align-self: end;
  bottom: 0;
  display: flex;
  justify-content: center;
  left: 0;
  padding: 1rem;
  position: absolute;
  width: 100%;
`
