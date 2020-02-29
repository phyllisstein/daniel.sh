import styled from 'styled-components'

export const Hero = styled.article`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
  width: 100%;
  height: 100%;

  ${ ({ theme }) => theme.responsive.query.lessThan('md')`
    text-align: center;
  ` }
`
