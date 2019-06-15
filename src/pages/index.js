import {
  Blurb,
  Break,
  Hero,
  Nav,
  Root,
  Segment,
} from 'styles/pages/index'
import Button, { ButtonGroup } from '@atlaskit/button'
import React, { useCallback, useRef } from 'react'
import H from 'components/h'
import useComponentSize from '@rehooks/component-size'
import useScrollPosition from 'hooks/use-scroll-position'
import { useSpring } from 'react-spring'

const SEGMENT_INDICES = {
  blog: 1,
  contact: 3,
  main: 0,
  portfolio: 2,
}

function Index() {
  const rootRef = useRef(null)
  const { width: rootWidth } = useComponentSize(rootRef)
  const { x } = useScrollPosition()

  const [springProps, setSpringProps, springStop] = useSpring(() => ({ scroll: 0 }))

  const onNavClick = useCallback(
    e => setSpringProps({
      from: { scroll: x },
      reset: true,
      scroll: SEGMENT_INDICES[e.currentTarget.name] * rootWidth,
    }),
    [rootWidth, setSpringProps, x],
  )

  return (
    <Root ref={ rootRef } scrollLeft={ springProps.scroll } onTouchStart={ springStop } onWheel={ springStop }>
      <Segment borderColor='dahlia'>
        <Hero>
          <Blurb>
            <H primary size={ 4 }>
              I’m a full-stack engineer and lapsed essayist who brings an
              exacting editoral eye to bear on buliding a more daring web.
            </H>
            <H size={ 1 }>
              You can call me Daniel.
            </H>
          </Blurb>
          <Nav>
            <ButtonGroup appearance='subtle'>
              <Button name='blog' onClick={ onNavClick }>
                Blog
              </Button>
              <Button name='portfolio' onClick={ onNavClick }>
                Portfolio
              </Button>
              <Button name='contact' onClick={ onNavClick }>
                Contact
              </Button>
            </ButtonGroup>
          </Nav>
        </Hero>
      </Segment>
      <Segment borderColor='tart'>
        <Hero>
          <H size={ 1 }>Notes &amp; Errata</H>
          <H primary size={ 4 }>
            Don’t make the same mistakes I did.&nbsp;
            <Break />
            Make better ones.
          </H>
        </Hero>
      </Segment>
      <Segment borderColor='intrigue'>
        <Hero>
          <H size={ 1 }>It’s A Living</H>
          <H primary size={ 4 }>
          </H>
        </Hero>
      </Segment>
      <Segment borderColor='avocado'>
        <Hero>
          <H size={ 1 }>What’s His At?</H>
          <H primary size={ 4 }>
          </H>
        </Hero>
      </Segment>
    </Root>
  )
}

export default Index
