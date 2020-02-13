import styled from 'styled-components'

export interface PProps {
  accent?: boolean
}

export const P = styled.p<PProps>`
  ${ ({ accent, theme }) => accent ? theme.typography.accent() : theme.typography.primary() }
`
