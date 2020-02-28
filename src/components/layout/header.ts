import styled from 'styled-components'

export const Header = styled.header`
  align-items: flex-start;
  background-color: ${ ({ theme }) => theme.palette.css.inverse01 };
  border-bottom: 2px solid ${ ({ theme }) => theme.palette.css.ui03 };
  display: flex;
  flex-direction: column;
  height: 20vh;
  justify-content: flex-end;
  padding: 1rem;
`
