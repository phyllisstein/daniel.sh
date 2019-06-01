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
            Essayist and engineer applying a careful
            editorial eye to building a more daring web.
          </p>
        </BioRow>
      </Header>
    </Root>
  )
}

export default Index
