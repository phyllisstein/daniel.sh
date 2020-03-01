import styled from 'styled-components'

export const Subtitle = styled.h3`
  ${ ({ theme }) => theme.typography.accent({ fontSize: 3, lineHeight: 3 }) }

  color: ${ ({ theme }) => theme.palette.css.text02 };
  font-weight: 400;
`

export const Title = styled.h1`
  ${ ({ theme }) => theme.typography.accent({ fontSize: 5, lineHeight: 5 }) }

  width: max-content;
  max-width: 100%;

  color: ${ ({ theme }) => theme.palette.css.text01 };
  font-weight: 600;
`

export const TitleRoot = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: min-content;
  max-width: 100%;
  padding: 1rem;
`
