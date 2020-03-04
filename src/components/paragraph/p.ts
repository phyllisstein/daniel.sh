import styled from 'styled-components'

export interface PProps {
  accent?: boolean
}

export const P = styled.p<PProps>`
  ${ ({ accent, theme }) => accent ? theme.typography.accent({ leadingBottom: 1 }) : theme.typography.primary({ leadingBottom: 1 }) }

  text-indent: 0;
`
