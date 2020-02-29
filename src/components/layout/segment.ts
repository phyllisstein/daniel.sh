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
  ` }

  ${ ({ openTop }) => openTop && css`
    border-top: 0;
  ` }

  position: relative;

  flex: 1 0 100%;
  width: 100vw;
  height: 100%;
  -webkit-overflow-scrolling: touch;
  overflow-x: hidden;
  overflow-y: scroll;
`

export const SegmentWrapper = styled(animated.section)`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: stretch;
  justify-content: flex-start;
  height: 100%;
  -webkit-overflow-scrolling: touch;
  overflow-x: scroll;
  overflow-y: hidden;
`
