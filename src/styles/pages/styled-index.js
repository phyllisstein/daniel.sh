import { Header as HeaderBase } from 'components'
import styled from 'styled-components'

export const BlurbRow = styled.div``

export const H = styled(HeaderBase)`
  font-weight: 500;
`

export const Header = styled.header`
  display: grid;
  grid-row-gap: 1%;
  grid-template-columns: 100%;
  grid-template-rows: 50% 50%;
  height: 100%;
  padding: 2.5%;
  width: 100%;
`

export const NameRow = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`

export const Root = styled.section`
  height: 100%;
  width: 100%;
`
