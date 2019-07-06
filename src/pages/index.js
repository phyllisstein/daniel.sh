import {
  Blurb,
  Hero,
  Nav,
  Root,
  Segment,
} from 'styles/pages/index'
import Button, { ButtonGroup } from '@atlaskit/button'
import H from 'components/h'
import React from 'react'

function Index() {
  return (
    <Root>
      <Segment borderColor='tango'>
        <Hero>
          <Blurb>
            <H primary size={ 5 }>
              I’m a full-stack engineer and lapsed essayist who brings an
              exacting editoral eye to bear on buliding a more daring web.
            </H>
            <H size={ 1 }>
              You can call me Daniel.
            </H>
          </Blurb>
          <Nav>
            <ButtonGroup appearance='subtle'>
              <Button href='https://twitter.com/phyllisstein' name='blog'>
                Twitter
              </Button>
              <Button name='portfolio'>
                Portfolio
              </Button>
              <Button name='contact'>
                Contact
              </Button>
            </ButtonGroup>
          </Nav>
        </Hero>
      </Segment>
    </Root>
  )
}

export default Index
