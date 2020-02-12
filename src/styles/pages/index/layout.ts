import styled, { css } from 'styled-components'
import { animated } from 'react-spring'

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

export const Segment = styled.section<{ borderColor?: string }>`
  ${ ({ borderColor, theme }) => borderColor && css`
    border: 1rem solid ${ theme.palette.css[borderColor] };
  ` };

  flex: 1 0 100%;
  height: 100%;
  position: relative;
  width: 100vw;
`
