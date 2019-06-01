import {
  BioRow,
  H,
  Hero,
  NameRow,
  Root,
} from 'styles/pages/index'
import React from 'react'

function Index() {
  return (
    <Root>
      <Hero>
        <NameRow>
          <H size={ 1 }>
            I’m Daniel.
          </H>
        </NameRow>
        <BioRow>
          <p>
            Essayist and engineer applying a careful
            editorial eye to building a more daring web.
          </p>
        </BioRow>
      </Hero>
    </Root>
  )
}

export default Index
