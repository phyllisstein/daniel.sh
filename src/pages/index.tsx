import { faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/sharp-solid-svg-icons'
import type { NextPage } from 'next'

import { P } from 'components/markup'
import gsap from 'gsap'
import {
  ButtonBar,
  Card,
  CardFooter,
  Centered,
  Name,
  Tagline,
  Main,
  Section,
  Subtitle,
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
              to ambitious digital media projects.
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
        <Section>
          <Card className='spectrum-Card spectrum-Card--sizeM' role='figure'>
            <div className='spectrum-Card-coverPhoto' style={{ backgroundImage: 'url(/bauer-white.png)', backgroundRepeat: 'no-repeat', backgroundSize: '75%' }} />
            <div className='spectrum-Card-body'>
              <div className='spectrum-Card-header'>
                <div className='spectrum-Card-title spectrum-Heading spectrum-Heading--sizeS'>Bauer Media</div>
              </div>
              <div className='spectrum-Card-content'>
                <Subtitle className='spectrum-Card-subtitle spectrum-Detail'>Technical Lead</Subtitle>
              </div>
            </div>
            <CardFooter className='spectrum-Card-footer'>
              <P fontSize={ 3 }>Footer</P>
            </CardFooter>
          </Card>
        </Section>
      </Main>
    </div>
  )
}

export default Home
