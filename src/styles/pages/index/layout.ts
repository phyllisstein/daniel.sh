import styled, { css } from 'styled-components'
import { animated } from 'react-spring'

export const Header = styled.header`
  align-items: flex-start;
  background-color: ${ ({ theme }) => theme.palette.css.inverse01 };
  color: ${ ({ theme }) => theme.palette.css.text01 };
  border-bottom: 2px solid ${ ({ theme }) => theme.palette.css.ui03 };
  display: flex;
  flex-direction: column;
  height: 20vh;
  justify-content: flex-end;
  padding: 1.414%;
`

export const Hero = styled.header`
  align-items: stretch;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  position: relative;
  width: 100%;

  ${ ({ theme }) => theme.responsive.query.lessThan('md')`
    text-align: center;
  ` }
`

export const Root = styled(animated.section)`
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

export const Segment = styled.section<{ borderColor?: string }>`
  ${ ({ borderColor, theme }) => borderColor && css`
    border: 1rem solid ${ theme.palette.css[borderColor] };
  ` };

  flex: 1 0 100%;
  height: 100%;
  -webkit-overflow-scrolling: touch;
  overflow-x: hidden;
  overflow-y: scroll;
  position: relative;
  transform: translate3d(0, 0, 0);
  width: 100vw;
`
