import styled from 'styled-components'

export const Card = styled.article`
  ${ ({ theme }) => theme.elevation.box(2) }

  align-items: stretch;
  background-color: ${ ({ theme }) => theme.palette.css.ui01 };
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 1rem;
`
