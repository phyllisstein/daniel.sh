import { animated } from 'react-spring'
import styled from '@emotion/styled'

export const Break = styled('br')`
  display: none;

  ${ ({ theme }) => theme.media.greaterThan('md')`
    display: inline-block;
  ` }
`

export const Close = styled.div`
`

export const Root = styled(animated.section)`
  align-items: stretch;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  height: 100%;
  justify-content: flex-start;
  -webkit-overflow-scrolling: touch;
  overflow-x: auto;
  overflow-y: hidden;
`

export const Segment = styled.section`
  border: ${ ({ borderColor, theme }) => borderColor ? `1rem solid ${ theme.palette.rgb[borderColor] }` : '0' };
  flex: 1 0 100%;
  height: 100%;
  padding: 6.258%;
  position: relative;
  width: 100vw;
`
