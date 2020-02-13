import { HeroBase, HeroImage } from 'styles/components/card'
import React, { FunctionComponent } from 'react'

export interface CardHeroProps {
  src: string
}

export const CardHero: FunctionComponent<CardHeroProps> = ({ src }) => (
  <HeroBase>
    <HeroImage src={ src } />
  </HeroBase>
)
