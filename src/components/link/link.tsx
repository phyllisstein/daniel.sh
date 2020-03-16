import { Link as GatsbyLink, GatsbyLinkProps } from 'gatsby'
import React, { FunctionComponent } from 'react'
import { LinkBase } from './link-styles'

interface LinkProps<State> extends GatsbyLinkProps<State> {
  plain?: boolean
}

export const Link: FunctionComponent<LinkProps<any>> = ({ to, ...props }) => {
  if (/^\//.test(to)) {
    return <LinkBase { ...props } as={ GatsbyLink } to={ to } />
  }

  return <LinkBase { ...props } href={ to } />
}
