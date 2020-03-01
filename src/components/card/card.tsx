import styled from 'styled-components'

interface CardProps {
  narrow?: boolean
}

export const Card = styled.article<CardProps>`
  ${ ({ theme }) => theme.elevation.box(1) }

  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
  margin: ${ ({ narrow }) => narrow ? '1rem 0' : '1rem' };

  background-color: ${ ({ theme }) => theme.palette.css.ui01 };
`
