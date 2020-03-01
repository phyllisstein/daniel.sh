import styled from 'styled-components'

export const SectionHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  height: 25vh;
  padding: 2.5% 5%;

  background-color: ${ ({ theme }) => theme.palette.css.inverse01 };
  border-bottom: 2px solid ${ ({ theme }) => theme.palette.css.ui03 };
`

export const SectionTitle = styled.h1`
  ${ ({ theme }) => theme.typography.accent({ fontSize: 6, lineHeight: 7 }) }

  color: ${ ({ theme }) => theme.palette.css.text01 };
  font-weight: 600;
`
