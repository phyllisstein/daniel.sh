import styled from 'styled-components'

const Page = styled.section`
  display: flex;
`

const Box = ({ children = null, width = 3, height = 3 }) => {
  const tops = Array.from(
    { length: width * 2 },
    () => (<code>─</code>),
  )
  const sides = Array.from(
    { length: height },
    () => (<code>│</code>),
  )

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
        fontFamily: 'PragmataPro Mono',
        letterSpacing: -2,
        position: 'relative',
        width: 'min-content',
      }}>
        <div id='border-container' style={{ display: 'contents' }}>
          <div style={{ display: 'grid', gridAutoFlow: 'column dense' }}>
            <code>┌</code>
            { tops }
            <code>┐</code>
          </div>
          <div style={{ display: 'grid', gridAutoFlow: 'row dense' }}>
            { sides }
          </div>
          <div style={{ display: 'grid', gridAutoFlow: 'column dense' }}>
            <code>└</code>
            { tops }
            <code>┘</code>
          </div>
          <div style={{ display: 'grid', gridAutoFlow: 'row dense', position: 'absolute', right: 0, top: '2ex' }}>
            { sides }
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
