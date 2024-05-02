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
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: 'min-content',
      height: 'min-content',
      fontSize: '3rem',
      lineHeight: '3rem',
    }}>
      <div style={{
        position: 'relative',
        width: 'min-content',
        fontFamily: 'PragmataPro Mono',
        letterSpacing: -2,
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
          <div style={{ display: 'grid', gridAutoFlow: 'row dense', position: 'absolute', top: '2ex', right: 0 }}>
            { sides }
          </div>
        </div>
        <div id='content-container' style={{ position: 'absolute', top: 0, right: 0, bottom: 0, left: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
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
