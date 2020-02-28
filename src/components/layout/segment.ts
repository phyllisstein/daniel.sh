import styled, { css } from 'styled-components'
import { animated } from 'react-spring'
import { CSSColors } from 'styles/theme/palette'

interface SegmentProps {
  borderColor?: keyof CSSColors
  openTop?: boolean
}

export const Segment = styled.section<SegmentProps>`
  ${ ({ borderColor, theme }) => borderColor && css`
    border: 5px solid ${ theme.palette.css[borderColor] };
  ` };

  ${ ({ openTop }) => openTop && css`
    border-top: 0;
  ` }

  flex: 1 0 100%;
  height: 100%;
  -webkit-overflow-scrolling: touch;
  overflow-x: hidden;
  overflow-y: scroll;
  position: relative;
  width: 100vw;
`

export const SegmentWrapper = styled(animated.section)`
  align-items: stretch;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  height: 100%;
  justify-content: flex-start;
  -webkit-overflow-scrolling: touch;
  overflow-x: scroll;
  overflow-y: hidden;
`
