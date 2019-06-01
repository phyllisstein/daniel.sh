import {
  H,
  Hero,
  Root,
} from 'styles/pages/index'
import React from 'react'

function Index() {
  return (
    <Root>
      <Hero>
        <p>
          I’m a full-stack engineer and lapsed essayist who brings an
          exacting editoral eye to bear on buliding a more daring web.
        </p>
        <H size={ 1 }>
          You can call me Daniel.
        </H>
      </Hero>
    </Root>
  )
}

export default Index
