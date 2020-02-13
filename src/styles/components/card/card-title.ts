import styled from 'styled-components'

export const Subtitle = styled.span`
  ${ ({ theme }) => theme.typography.accent({ fontSize: 1, lineHeight: 1 }) }

  color: ${ ({ theme }) => theme.palette.css.text03 };
  display: block;
`

export const Title = styled.h1`
  ${ ({ theme }) => theme.typography.accent({ fontSize: 2, lineHeight: 2 }) }

  color: ${ ({ theme }) => theme.palette.css.text01 };
  max-width: 100%;
  width: max-content;
`

export const TitleRoot = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 1rem;
  max-width: 100%;
  width: min-content;
`
