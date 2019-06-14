import {animated} from 'react-spring'
import R from 'ramda'
import styled from 'styled-components'

export const Root = styled(animated.section)`
  align-items: stretch;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  height: 100%;
  justify-content: flex-start;
  overflow: auto hidden;
  -webkit-overflow-scrolling: touch;
`

export const Segment = styled.section`
  background-color: ${({backgroundColor, theme}) => R.propOr('white', backgroundColor, theme.palette.rgb)};
  border: 1rem solid ${({borderColor, theme}) => R.propOr('white', borderColor, theme.palette.rgb)};
  flex: 1 0 100%;
  height: 100%;
  position: relative;
  width: 100vw;
`
