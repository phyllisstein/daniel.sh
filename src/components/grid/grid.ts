import styled, { css } from 'styled-components'

export const Grid = styled.div`
  width: 100%;
  max-width: 99rem;
  margin: 0 auto;
  padding: 1rem;

  ${ ({ theme }) => theme.responsive.greaterThan('md', css`
    padding: 2rem;
  `) }

  ${ ({ theme }) => theme.responsive.greaterThan('max', css`
    padding: 2.5rem;
  `) }
`
