import styled, { css } from 'styles/styled-components'
import { animated } from 'react-spring'

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
  ${ ({ borderColor, theme }) => borderColor && css`
    border: 1rem solid ${ theme.palette.rgb[borderColor] };
  ` };

  flex: 1 0 100%;
  height: 100%;
  padding: 6.258%;
  position: relative;
  width: 100vw;
`
