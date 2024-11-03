import styled from 'styled-components'
import gsap from 'gsap'
import SplitText from 'gsap/dist/SplitText'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(SplitText)

const Page = styled.section`
  display: flex;
`

const Box = ({ children, height = 3, width = 3 }) => {
  const top = Array.from(
    { length: width * 2 },
    () => (<code>─</code>),
  )
  const right = Array.from(
    { length: height },
    () => (<code>│</code>),
  )

  useGSAP(() => {
    let stTop = new SplitText('#top', { type: 'chars' })
    gsap.from(stTop.chars, {
      duration: 0.1,
      opacity: 0,
      stagger: 0.1,
    })

    let stRight = new SplitText('#right', { type: 'chars' })
    gsap.from(stRight.chars, {
      delay: 0.2,
      duration: 0.5,
      opacity: 0,
      stagger: 0.1,
    })

    let stBottom = new SplitText('#bottom', { type: 'chars' })
    gsap.from(stBottom.chars, {
      delay: 0.1,
      duration: 0.5,
      opacity: 0,
      reverse: true,
      stagger: 0.1,
    })

    let stLeft = new SplitText('#left', { type: 'chars' })
    gsap.from(stLeft.chars, {
      delay: 0.1,
      duration: 0.5,
      opacity: 0,
      stagger: 0.1,
    })
  })

  return (
    <div style={{
      alignItems: 'center',
      display: 'flex',
      fontSize: '3rem',
      height: 'min-content',
      justifyContent: 'center',
      lineHeight: '3rem',
      width: 'min-content',
    }}>
      <div style={{
        fontFamily: 'PragmataPro Mono Liga',
        letterSpacing: -2,
        position: 'relative',
        width: 'min-content',
      }}>
        <div id='border-container' style={{ display: 'contents' }}>
          <div id='top' style={{ display: 'grid', gridAutoFlow: 'column dense' }}>
            <code>┌</code>
            { top }
            <code>┐</code>
          </div>
          <div id='right' style={{ display: 'grid', gridAutoFlow: 'row dense' }}>
            { right }
          </div>
          <div id='bottom' style={{ display: 'grid', gridAutoFlow: 'column dense' }}>
            <code>└</code>
            { top }
            <code>┘</code>
          </div>
          <div id='left' style={{ display: 'grid', gridAutoFlow: 'row dense', position: 'absolute', right: 0, top: '2ex' }}>
            { right }
          </div>
        </div>
        <div id='content-container' style={{ alignItems: 'center', bottom: 0, display: 'flex', justifyContent: 'center', left: 0, position: 'absolute', right: 0, top: 0 }}>
          { children }
        </div>
      </div>
    </div>
  )
}

export default function Portfolio() {
  return (
    <Page>
      <pre style={{
        fontFamily: 'PragmataPro Mono',
        whiteSpace: 'pre',
        wordBreak: 'keep-all',
      }}>
        <Box height={ 5 } width={ 5 }>
          BOX
        </Box>
      </pre>
    </Page>
  )
}
