import React, { FunctionComponent } from 'react'
import { Link } from 'components/link'
import { Root } from './toc-item-styles'

interface TOCItemProps {
  depth: number
  slug: string
}

export const TOCItem: FunctionComponent<TOCItemProps> = ({ children, depth, slug }) =>
  <Root depth={ depth }>
    <Link to={ `#${ slug }` }>
      { children }
    </Link>
  </Root>
