import Button, { ButtonGroup } from '@atlaskit/button'
import {
  H,
  Hero,
  Nav,
  Root,
  Segment,
} from 'styles/pages/index'
import React, { useCallback, useRef } from 'react'
import useComponentSize from '@rehooks/component-size'
import useScrollPosition from 'hooks/use-scroll-position'
import { useSpring } from 'react-spring'

const LINK_TARGETS = {
  contact: 'https://twitter.com/phyllisstein',
  portfolio: 'https://www.linkedin.com/in/danielsh1/',
}

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

  const onLinkOpen = useCallback(
    e => window.open(LINK_TARGETS[e.currentTarget.name], '_blank'),
  )

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
      <Segment borderColor='icedAvocado'>
        <Hero>
          <p>
            I’m a full-stack engineer and lapsed essayist who brings an
            exacting editoral eye to bear on buliding a more daring web.
          </p>
          <H size={ 1 }>
            You can call me Daniel.
          </H>
          <Nav>
            <ButtonGroup appearance='subtle'>
              <Button isDisabled name='blog'>
                Blog
              </Button>
              <Button name='portfolio' onClick={ onLinkOpen }>
                Portfolio
              </Button>
              <Button name='contact' onClick={ onLinkOpen }>
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
