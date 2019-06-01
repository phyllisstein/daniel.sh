import { Header as HeaderBase } from 'components'
import styled from 'styled-components'

export const BioRow = styled.div`
  padding: 1rem;
`

export const H = styled(HeaderBase)`
  font-weight: 300;
`

export const Hero = styled.header`
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 50% 1fr 10%;
  height: 100%;
  width: 100%;
`

export const NameRow = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 1rem;
`

export const Root = styled.section`
  height: 100%;
  width: 100%;
`