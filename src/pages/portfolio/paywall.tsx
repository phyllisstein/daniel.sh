import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisV } from '@fortawesome/sharp-solid-svg-icons'
import gsap from 'gsap'
import type { NextPage } from 'next'
import { useLayoutEffect, useRef } from 'react'
import styled from 'styled-components'

const BackCard = styled.div`
  position: absolute;

  transform: translate(-50%, -50%) translate3d(-50px, -500px, -1000px);
  transform-style: preserve-3d;
  backface-visibility: hidden;
`

const FrontCard = styled.div`
  position: absolute;

  transform: translate(-50%, -50%) translate3d(-100px, 100px, 500px);
  transform-style: preserve-3d;
  backface-visibility: hidden;
`

const Root = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;

  transform-style: preserve-3d;
  perspective: 1000px;

  will-change: perspective, transform;
`

const StageRoot = styled.div`
  transform-style: preserve-3d;
  will-change: transform;
`

const Paywall: NextPage = () => {
  const stageRoot = useRef<HTMLDivElement>()

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.timeline()
        .to(stageRoot.current!,
          {
            delay: 2.5,
            duration: 1,
            x: '100px',
            y: '-100px',
            z: '-500px',
          },
        )
        .to(stageRoot.current!, {
          delay: 1,
          duration: 1,
          x: '50px',
          y: '500px',
          z: '1000px',
        })
    })

    return () => ctx.revert()
  }, [])

  return (
    <Root>
      <StageRoot ref={ stageRoot }>
        <FrontCard className='spectrum-Card' role='figure' style={{ width: '275px' }}>
          <div className='spectrum-Card-coverPhoto' style={{ backgroundImage: 'url(/bauer.png)' }} />
          <hr className='spectrum-Divider spectrum-Divider--sizeS spectrum-Card-divider' />
          <div className='spectrum-Card-body'>
            <div className='spectrum-Card-header'>
              <div className='spectrum-Card-title spectrum-Heading spectrum-Heading--sizeXS'>
                Enumeration before directed
              </div>
              <div className='spectrum-Card-actionButton'>
                <button aria-haspopup='true' className='spectrum-ActionButton spectrum-ActionButton--sizeM spectrum-ActionButton--quiet'>
                  <FontAwesomeIcon icon={ faEllipsisV } />
                </button>
              </div>
            </div>
            <div className='spectrum-Card-content'>
              <div className='spectrum-Card-description'>
                To provide for the United States shall be the same State with
                Treason, Felony, or other Property belonging to the Census
              </div>
            </div>
          </div>
          <div className='spectrum-Card-footer'>
            Footer
          </div>
        </FrontCard>
        <BackCard className='spectrum-Card' role='figure' style={{ width: '275px' }}>
          <div className='spectrum-Card-coverPhoto' style={{ backgroundImage: 'url(/bauer.png)' }} />
          <hr className='spectrum-Divider spectrum-Divider--sizeS spectrum-Card-divider' />
          <div className='spectrum-Card-body'>
            <div className='spectrum-Card-header'>
              <div className='spectrum-Card-title spectrum-Heading spectrum-Heading--sizeXS'>
                This is an exceptionally long card title
              </div>
              <div className='spectrum-Card-actionButton'>
                <button aria-haspopup='true' className='spectrum-ActionButton spectrum-ActionButton--sizeM spectrum-ActionButton--quiet'>
                  <FontAwesomeIcon icon={ faEllipsisV } />
                </button>
              </div>
            </div>
            <div className='spectrum-Card-content'>
              <div className='spectrum-Card-description'>
                Optional description; should be kept to one or two lines
              </div>
            </div>
          </div>
          <div className='spectrum-Card-footer'>
            Footer
          </div>
        </BackCard>
      </StageRoot>
    </Root>
  )
}

export default Paywall
