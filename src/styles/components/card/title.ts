import styled from 'styled-components'

export const Subtitle = styled.h3`
  ${ ({ theme }) => theme.typography.accent({ fontSize: 1, lineHeight: 1 }) }
  color: ${ ({ theme }) => theme.palette.css.text02 };
`

export const Title = styled.h1`
  ${ ({ theme }) => theme.typography.accent({ fontSize: 4, lineHeight: 4 }) }

  color: ${ ({ theme }) => theme.palette.css.text01 };
  max-width: 100%;
  width: max-content;
`

export const TitleRoot = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 100%;
  padding: 1rem;
  width: min-content;
`
