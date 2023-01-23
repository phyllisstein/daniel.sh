import { NextPage } from 'next'
import { useState } from 'react'

import { useHyphenator } from 'hooks/ui'

const Home: NextPage = () => {
  const [target, setTarget] = useState()
  useHyphenator(target)

  return (
    <div>
      <main>
        <h1 ref={ el => el && setTarget(el) }>You did the thing!</h1>
      </main>
    </div>
  )
}

export default Home
