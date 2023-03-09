import { faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/sharp-solid-svg-icons'
import type { NextPage } from 'next'

import {
  ButtonBar,
  Centered,
  Main,
  Name,
  Tagline,
  TitleContainer,
} from 'styles/pages/index'

const Home: NextPage = () => {
  return (
    <div>
      <Main>
        <TitleContainer>
          <Centered>
            <Tagline>
              I&rsquo;m a full-stack software engineer and architect bringing an editorial eye
              to ambitious digital&nbsp;media&nbsp;projects.
            </Tagline>
            <Name>
              You can call me Daniel.
            </Name>
          </Centered>
          <ButtonBar className='spectrum-QuickActions-overlay'>
            <div className='spectrum-QuickActions is-open'>
              <a className='spectrum-ActionButton spectrum-ActionButton--sizeL spectrum-ActionButton--quiet' href='mailto:daniel@daniel.sh'>
                <FontAwesomeIcon fixedWidth className='spectrum-Icon spectrum-Icon--sizeL spectrum-ActionButton-icon' icon={ faPaperPlane } />
              </a>
              <a className='spectrum-ActionButton spectrum-ActionButton--sizeL spectrum-ActionButton--quiet' href='https://twitter.com/phyllisstein'>
                <FontAwesomeIcon fixedWidth className='spectrum-Icon spectrum-Icon--sizeL spectrum-ActionButton-icon' icon={ faTwitter } />
              </a>
              <a className='spectrum-ActionButton spectrum-ActionButton--sizeL spectrum-ActionButton--quiet' href='https://linkedin.com/in/danielsh1'>
                <FontAwesomeIcon fixedWidth className='spectrum-Icon spectrum-Icon--sizeL spectrum-ActionButton-icon' icon={ faLinkedinIn } />
              </a>
            </div>
          </ButtonBar>
        </TitleContainer>
      </Main>
    </div>
  )
}

export default Home
