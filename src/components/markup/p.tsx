import { type ReactNode, useState } from 'react'
import styled from 'styled-components'

import { useHyphenator } from 'hooks/ui'
import type { PlumberProps } from 'styles/theme/plumber'

interface PProps extends Partial<PlumberProps> {
  children: ReactNode
}

const Graf = styled.p<PProps>`
  ${ ({ theme, ...props }) => theme.typeface.primary(
    {
      fontSize: 4,
      lineHeight: 5,
      ...props,
    },
  ) }

  text-indent: 0;

  & + & {
    text-indent: 1em;
  }

  &:first-of-type {
    margin-top: 0;
    padding-top: 0;
  }
`

export function P ({ children, ...props }: PProps) {
  const [el, setEl] = useState<HTMLParagraphElement>()
  useHyphenator(el)

  return (
    <Graf { ...props } ref={ setEl }>
      { children }
    </Graf>
  )
}
