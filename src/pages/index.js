import {
  H,
  Hero,
  Nav,
  Root,
} from 'styles/pages/index'
import Button from '@atlaskit/button'
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
        <Nav>
          <Button>
            Blog
          </Button>
          <Button>
            Portfolio
          </Button>
          <Button>
            Contact
          </Button>
        </Nav>
      </Hero>
    </Root>
  )
}

export default Index
