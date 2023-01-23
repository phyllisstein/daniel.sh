import { NextPage } from 'next'
import { useState } from 'react'

import { useHyphenator } from 'hooks/ui'
import { Centered, Container, Dek, Hed } from 'styles/pages/index'

const Home: NextPage = () => {
  const [target, setTarget] = useState<HTMLElement>()
  useHyphenator(target)

  return (
    <div>
      <main>
        <Container>
          <Centered>
            <Hed ref={ el => setTarget(el) }>
              Full-stack software engineer and architect bringing an editorial eye to
              ambitious digital media projects.
            </Hed>
            <Dek>
              You can call me Daniel.
            </Dek>
          </Centered>
        </Container>
      </main>
    </div>
  )
}

export default Home
