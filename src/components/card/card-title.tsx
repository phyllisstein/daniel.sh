import React, { FunctionComponent } from 'react'
import { Subtitle, Title, TitleRoot } from 'styles/components/card'

export interface CardTitleProps {
  subtitle?: string
}

export const CardTitle: FunctionComponent<CardTitleProps> = ({ children, subtitle }) => (
  <TitleRoot>
    { subtitle && <Subtitle>{ subtitle }</Subtitle> }
    <Title>
      { children }
    </Title>
  </TitleRoot>
)
