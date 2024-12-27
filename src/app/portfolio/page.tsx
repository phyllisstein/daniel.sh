'use client'

import styled from 'styled-components'
import Deakbreaker from 'assets/dbl.svg'

const PortfolioPageContainer = styled.section`
    padding: 1rem;
`

const InstructionSection = styled.section`
    display: grid;
`

export default function PortfolioPage() {
  return (
    <PortfolioPageContainer>
      <h1>Portfolio</h1>
      <Deakbreaker />
    </PortfolioPageContainer>
  )
}
