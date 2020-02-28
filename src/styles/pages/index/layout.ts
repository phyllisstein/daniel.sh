import styled from 'styled-components'

export const Hero = styled.article`
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
