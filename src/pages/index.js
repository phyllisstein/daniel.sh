import {
  BlurbRow,
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
        <BlurbRow>
          <p>
            Essayist turned engineer applying an
            editorial eye to build a a more daring web.
          </p>
        </BlurbRow>
      </Header>
    </Root>
  )
}

export default Index
