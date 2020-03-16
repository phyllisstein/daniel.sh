import { LinkProps } from './link'
import styled from 'styled-components'

export const LinkBase = styled.a<LinkProps>`
  ${ ({ theme }) => theme.typography.accent() }

  color: ${ ({ theme }) => theme.palette.css.interactive01 };
  text-decoration: ${ ({ plain }) => plain ? 'none' : 'underline' };
  text-decoration-skip-ink: auto;
`
