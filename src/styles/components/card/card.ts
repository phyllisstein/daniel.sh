import styled from 'styled-components'

export const CardRoot = styled.article`
  ${ ({ theme }) => theme.elevation.box(4) }

  align-items: stretch;
  background-color: ${ ({ theme }) => theme.palette.css.ui01 };
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 1rem;
`
