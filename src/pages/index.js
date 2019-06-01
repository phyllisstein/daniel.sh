import {
  BioRow,
  H,
  Header,
  NameRow,
  Root,
} from 'styles/pages/styled-index'
import React from 'react'

function Index() {
  return (
    <Root>
      <Header>
        <NameRow>
          <H size={ 1 }>
            I’m Daniel.
          </H>
        </NameRow>
        <BioRow>
          <p>
            Essayist and engineer turning a careful
            editorial eye towards building a more daring web.
          </p>
        </BioRow>
      </Header>
    </Root>
  )
}

export default Index
