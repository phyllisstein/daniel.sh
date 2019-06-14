import styled from '@emotion/styled'

export const Blurb = styled.div`
  max-width: 42rem;
`

// FIXME: Vertical rhythm gets a little screwy w/ vertical centering.
export const Hero = styled.header`
  align-items: stretch;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  padding: 1rem;
  position: relative;
  width: 100%;

  ${ ({ theme }) => theme.media.greaterThan('lg')`
    padding: 6.258%;
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
