import styled from 'styled-components'

export const Children = styled.div`
  background-color: white;
  border: 1rem solid ${ ({ theme }) => theme.palette.rgb.icedAvocado };
  height: 100%;
  -webkit-overflow-scrolling: touch;
  overflow-x: hidden;
  overflow-y: auto;
  width: 100%;
`

export const Wrapper = styled.main`
  height: 100vh;
  overflow: hidden;
  width: 100vw;
`
