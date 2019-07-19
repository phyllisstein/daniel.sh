import {
  Blurb,
  Hero,
  Nav,
  Root,
  Segment,
} from 'styles/pages/index'
import Button, { ButtonGroup } from '@atlaskit/button'
import { faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faPaperPlane } from '@fortawesome/pro-light-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import H from 'components/h'
import React from 'react'

function Index() {
  return (
    <Root>
      <Segment borderColor='sin'>
        <Hero>
          <Blurb>
            <H primary size={ 4 }>
              I’m a full-stack engineer and lapsed essayist using an
              exacting editorial eye to build a more daring web.
            </H>
            <H size={ 1 }>
              You can call me Daniel.
            </H>
          </Blurb>
          <Nav>
            <ButtonGroup appearance='subtle'>
              <Button href='https://twitter.com/phyllisstein' target='_blank'>
                <FontAwesomeIcon icon={ faTwitter } /> Twitter
              </Button>
              <Button href='https://linkedin.com/in/danielsh1' target='_blank'>
                <FontAwesomeIcon icon={ faLinkedinIn } /> LinkedIn
              </Button>
              <Button href='mailto:daniel@daniel.sh'>
                <FontAwesomeIcon icon={ faPaperPlane } /> Contact
              </Button>
            </ButtonGroup>
          </Nav>
        </Hero>
      </Segment>
    </Root>
  )
}

export default Index
