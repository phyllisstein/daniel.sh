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
        <BioRow>
          <p>
            I’m a full-stack web developer and lapsed essayist who brings an
            exacting editoral eye to bear on buliding a more daring web.
          </p>
        </BioRow>
        <NameRow>
          <H size={ 1 }>
            You can call me Daniel.
          </H>
        </NameRow>
      </Hero>
    </Root>
  )
}

export default Index
