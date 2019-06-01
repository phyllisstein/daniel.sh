import { Link } from 'gatsby'
import styled from '@emotion/styled'

export const Button = styled(Link)`
  ${ ({ theme }) => theme.plumber({
    fontSize: theme.typography.scale(3),
    lineHeight: theme.typography.scale(3),
  }) }

  align-items: center;
  background-color: ${ ({ bg }) => bg.hex() };
  color: #FFF;
  display: flex;
  font-family: ${ ({ theme }) => theme.typography.primaryStack };
  font-weight: 600;
  justify-content: center;
  transition: ${ ({ theme }) => `background-color ${ theme.transition.duration.exit } ${ theme.transition.timing.exitTemporary }` };

  &:hover {
    background-color: ${ ({ bg }) => bg.set('hsl.h', '-5').darken(0.25).hex() };
    color: #FFF;
    text-decoration: none;
  }
`
