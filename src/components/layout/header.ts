import styled from 'styled-components'

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  height: 20vh;
  padding: 1rem;

  background-color: ${ ({ theme }) => theme.palette.css.inverse01 };
  border-bottom: 2px solid ${ ({ theme }) => theme.palette.css.ui03 };
`
