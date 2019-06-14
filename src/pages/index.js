import {
  Blurb,
  Hero,
  Nav,
  Root,
  Segment,
} from 'styles/pages/index'
import Button, { ButtonGroup } from '@atlaskit/button'
import React, { useCallback, useRef, useState } from 'react'
import H from 'components/h'
import InlineDialog from '@atlaskit/inline-dialog'
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
  const onLinkOpen = e => window.open(LINK_TARGETS[e.currentTarget.name], '_blank')

  const [showBlogDialog, setShowBlogDialog] = useState(false)
  const onToggleBlogDialog = () => setShowBlogDialog(!showBlogDialog)

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
      <Segment borderColor='icedAvocado'>
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
              <InlineDialog content={ <span>Coming soon! 😬</span> } isOpen={ showBlogDialog } onClose={ onToggleBlogDialog }>
                <Button isSelected={ showBlogDialog } name='blog' onClick={ onToggleBlogDialog }>
                  Blog
                </Button>
              </InlineDialog>
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
