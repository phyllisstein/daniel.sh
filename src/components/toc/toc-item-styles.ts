import styled from 'styled-components'

interface RootProps {
  depth: number
}

export const Root = styled.li<RootProps>`
  margin-left: ${ ({ depth, theme }) => theme.scale.rem((depth - 1) ** 2) };
`
