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
  ExperienceSection,
  Subtitle,
  TitleContainer, ExperienceCards,
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
        <ExperienceSection>
          <ExperienceCards>
            <Card className='spectrum-Card spectrum-Card--sizeM' role='figure'>
              <div style={{ backgroundColor: 'rgb(63, 63, 63)', padding: '0' }}>
                <div className='spectrum-Card-coverPhoto' style={{ backgroundImage: 'url(/think-zero-gravity.gif)', backgroundRepeat: 'no-repeat', backgroundSize: '30%' }} />
              </div>
              <div className='spectrum-Card-body'>
                <div className='spectrum-Card-header'>
                  <div className='spectrum-Card-title spectrum-Heading spectrum-Heading--sizeS'><em>Eater</em> Maps</div>
                </div>
                <div className='spectrum-Card-content'>
                  <Subtitle className='spectrum-Card-subtitle spectrum-Detail'>Architect • Vox</Subtitle>
                </div>
              </div>
            </Card>
            <Card className='spectrum-Card spectrum-Card--sizeM' role='figure'>
              <div style={{ backgroundColor: 'rgb(63, 63, 63)', padding: '0' }}>
                <div className='spectrum-Card-coverPhoto' style={{ backgroundImage: 'url(/peek.gif)', backgroundRepeat: 'no-repeat', backgroundSize: '30%' }} />
              </div>
              <div className='spectrum-Card-body'>
                <div className='spectrum-Card-header'>
                  <div className='spectrum-Card-title spectrum-Heading spectrum-Heading--sizeS'>New York Paywall</div>
                </div>
                <div className='spectrum-Card-content'>
                  <Subtitle className='spectrum-Card-subtitle spectrum-Detail'>Architect/Lead • NYM</Subtitle>
                </div>
              </div>
            </Card>
            <Card className='spectrum-Card spectrum-Card--sizeM' role='figure'>
              <div style={{ backgroundColor: 'rgb(63, 63, 63)', padding: '0' }}>
                <div className='spectrum-Card-coverPhoto' style={{ backgroundImage: 'url(/hydraulicpress.gif)', backgroundRepeat: 'no-repeat', backgroundSize: '30%' }} />
              </div>
              <div className='spectrum-Card-body'>
                <div className='spectrum-Card-header'>
                  <div className='spectrum-Card-title spectrum-Heading spectrum-Heading--sizeS'>Core Web Vitals</div>
                </div>
                <div className='spectrum-Card-content'>
                  <Subtitle className='spectrum-Card-subtitle spectrum-Detail'>Vox • NYM</Subtitle>
                </div>
              </div>
            </Card>
            <Card className='spectrum-Card spectrum-Card--sizeM' role='figure'>
              <div style={{ backgroundColor: 'rgb(63, 63, 63)', padding: '0' }}>
                <div className='spectrum-Card-coverPhoto' style={{ backgroundImage: 'url(/conga.gif)', backgroundRepeat: 'no-repeat', backgroundSize: '30%' }} />
              </div>
              <div className='spectrum-Card-body'>
                <div className='spectrum-Card-header'>
                  <div className='spectrum-Card-title spectrum-Heading spectrum-Heading--sizeS'>Team Building</div>
                </div>
                <div className='spectrum-Card-content'>
                  <Subtitle className='spectrum-Card-subtitle spectrum-Detail'>Vox • NYM • Bauer</Subtitle>
                </div>
              </div>
            </Card>
          </ExperienceCards>
        </ExperienceSection>
      </Main>
    </div>
  )
}

export default Home
