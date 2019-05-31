import styled from 'styled-components'

export const Children = styled.div`
  background-color: white;
  height: 100%;
  -webkit-overflow-scrolling: touch;
  overflow-x: hidden;
  overflow-y: auto;
  width: 100%;
`

export const Wrapper = styled.main`
  background-color: ${ ({ theme }) => theme.palette.rgb.papaya };
  display: flex;
  height: 100vh;
  padding: 5px;
  width: 100vw;
`
