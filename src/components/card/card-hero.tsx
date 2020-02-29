import { HeroBase, HeroImage } from './card-hero-styles'
import React, { FunctionComponent } from 'react'

export interface CardHeroProps {
  src: string
}

export const CardHero: FunctionComponent<CardHeroProps> = ({ src }) => (
  <HeroBase>
    <HeroImage src={ src } />
  </HeroBase>
)
