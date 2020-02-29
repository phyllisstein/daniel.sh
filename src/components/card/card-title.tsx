import React, { FunctionComponent } from 'react'
import {
  Subtitle,
  Title,
  TitleRoot,
} from './card-title-styles'

export interface CardTitleProps {
  subtitle?: string
}

export const CardTitle: FunctionComponent<CardTitleProps> = ({ children, subtitle }) => {
  return (
    <TitleRoot>
      { subtitle && <Subtitle>{ subtitle }</Subtitle> }
      <Title>
        { children }
      </Title>
    </TitleRoot>
  )
}
