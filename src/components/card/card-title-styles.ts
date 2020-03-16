import styled from 'styled-components'

export const Subtitle = styled.h2`
  ${ ({ theme }) => theme.typography.accent({ fontSize: 2, lineHeight: 2 }) }

  color: ${ ({ theme }) => theme.palette.css.text02 };
  font-weight: 300;
`

export const Title = styled.h1`
  ${ ({ theme }) => theme.typography.accent({ fontSize: 4, lineHeight: 4 }) }

  width: max-content;
  max-width: 100%;

  color: ${ ({ theme }) => theme.palette.css.text01 };
  font-weight: 500;
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
