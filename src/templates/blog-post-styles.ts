import styled, { css } from 'styled-components'

export const Root = styled.article`
`

export const Body = styled.div`
`

export const Subtitle = styled.h2`
  ${ ({ theme }) => theme.typography.accent({ fontSize: 4, lineHeight: 4 }) }

  width: max-content;
  max-width: 100%;

  color: ${ ({ theme }) => theme.palette.css.text02 };
`

export const Timestamp = styled.h3`
  ${ ({ theme }) => theme.typography.accent({ fontSize: 1, lineHeight: 1 }) }
  color: ${ ({ theme }) => theme.palette.css.text03 };
`

export const Title = styled.h1`
  ${ ({ theme }) => theme.typography.accent({ fontSize: 6, lineHeight: 6 }) }

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
  height: 100%;
`
