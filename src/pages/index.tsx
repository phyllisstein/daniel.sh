import { faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/sharp-solid-svg-icons'
import type { NextPage } from 'next'
import Link from 'next/link'

import {
  ButtonBar,
  Card,
  CardFooter,
  CardSubtitle,
  CardTitle,
  Centered,
  ExperienceCards,
  ExperienceSection,
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
        <ExperienceSection>
          <ExperienceCards>
            <Card className='spectrum-Card spectrum-Card--sizeM' role='figure'>
              <div className='spectrum-Card-coverPhoto' style={{ backgroundImage: 'url(/think-zero-gravity.gif)', backgroundRepeat: 'no-repeat', backgroundSize: '30%' }} />
              <div className='spectrum-Card-body'>
                <div className='spectrum-Card-header'>
                  <CardTitle className='spectrum-Card-title spectrum-Heading spectrum-Heading--sizeS'>Eater Maps</CardTitle>
                </div>
                <div className='spectrum-Card-content'>
                  <CardSubtitle className='spectrum-Card-subtitle spectrum-Detail'>
                    Architecture • Engagement • Graphs • Storytelling
                  </CardSubtitle>
                </div>
              </div>
              <CardFooter className='spectrum-Card-footer'>
                <Link className='spectrum-Button spectrum-Button--fill spectrum-Button--accent spectrum-Button--sizeM spectrum-Button--outline' href='/portfolio/maps'>
                  <span className='spectrum-Button-label'>Read more</span>
                </Link>
              </CardFooter>
            </Card>
            <Card className='spectrum-Card spectrum-Card--sizeM' role='figure'>
              <div style={{ backgroundColor: 'rgb(63, 63, 63)', padding: '0' }}>
                <div className='spectrum-Card-coverPhoto' style={{ backgroundImage: 'url(/peek.gif)', backgroundRepeat: 'no-repeat', backgroundSize: '30%' }} />
              </div>
              <div className='spectrum-Card-body'>
                <div className='spectrum-Card-header'>
                  <CardTitle className='spectrum-Card-title spectrum-Heading spectrum-Heading--sizeS'>New York Paywall</CardTitle>
                </div>
                <div className='spectrum-Card-content'>
                  <CardSubtitle className='spectrum-Card-subtitle spectrum-Detail'>
                    Architecture • Monetization • Technical Leadership
                  </CardSubtitle>
                </div>
              </div>
              <CardFooter className='spectrum-Card-footer'>
                <Link className='spectrum-Button spectrum-Button--fill spectrum-Button--accent spectrum-Button--sizeM spectrum-Button--outline' href='/portfolio/paywall'>
                  <span className='spectrum-Button-label'>Read more</span>
                </Link>
              </CardFooter>
            </Card>
            <Card className='spectrum-Card spectrum-Card--sizeM' role='figure'>
              <div className='spectrum-Card-coverPhoto' style={{ backgroundImage: 'url(/rainblob.gif)', backgroundRepeat: 'no-repeat', backgroundSize: '30%' }} />
              <div className='spectrum-Card-body'>
                <div className='spectrum-Card-header'>
                  <CardTitle className='spectrum-Card-title spectrum-Heading spectrum-Heading--sizeS'>Ignota</CardTitle>
                </div>
                <div className='spectrum-Card-content'>
                  <CardSubtitle className='spectrum-Card-subtitle spectrum-Detail'>
                    Interactive Content • Storytelling • Editorial Design • Equitable Publishing
                  </CardSubtitle>
                </div>
              </div>
              <CardFooter className='spectrum-Card-footer'>
                <Link className='spectrum-Button spectrum-Button--fill spectrum-Button--accent spectrum-Button--sizeM spectrum-Button--outline' href='/portfolio/team'>
                  <span className='spectrum-Button-label'>Read more</span>
                </Link>
              </CardFooter>
            </Card>
            <Card className='spectrum-Card spectrum-Card--sizeM' role='figure'>
              <div className='spectrum-Card-coverPhoto' style={{ backgroundImage: 'url(/conga.gif)', backgroundRepeat: 'no-repeat', backgroundSize: '30%' }} />
              <div className='spectrum-Card-body'>
                <div className='spectrum-Card-header'>
                  <CardTitle className='spectrum-Card-title spectrum-Heading spectrum-Heading--sizeS'>Team-Building</CardTitle>
                </div>
                <div className='spectrum-Card-content'>
                  <CardSubtitle className='spectrum-Card-subtitle spectrum-Detail'>
                    Mentorship • Team Safety • Technical Leadership
                  </CardSubtitle>
                </div>
              </div>
              <CardFooter className='spectrum-Card-footer'>
                <Link className='spectrum-Button spectrum-Button--fill spectrum-Button--accent spectrum-Button--sizeM spectrum-Button--outline' href='/portfolio/team'>
                  <span className='spectrum-Button-label'>Read more</span>
                </Link>
              </CardFooter>
            </Card>
            <Card className='spectrum-Card spectrum-Card--sizeM' role='figure'>
              <div className='spectrum-Card-coverPhoto' style={{ backgroundImage: 'url(/hydraulicpress.gif)', backgroundRepeat: 'no-repeat', backgroundSize: '30%' }} />
              <div className='spectrum-Card-body'>
                <div className='spectrum-Card-header'>
                  <CardTitle className='spectrum-Card-title spectrum-Heading spectrum-Heading--sizeS'>Core Web Vitals</CardTitle>
                </div>
                <div className='spectrum-Card-content'>
                  <CardSubtitle className='spectrum-Card-subtitle spectrum-Detail'>
                    Audience Acquisition • Page Performance • Stack &amp; Tooling
                  </CardSubtitle>
                </div>
              </div>
              <CardFooter className='spectrum-Card-footer'>
                <Link className='spectrum-Button spectrum-Button--fill spectrum-Button--accent spectrum-Button--sizeM spectrum-Button--outline' href='/portfolio/web-vitals'>
                  <span className='spectrum-Button-label'>Read more</span>
                </Link>
              </CardFooter>
            </Card>
          </ExperienceCards>
        </ExperienceSection>
      </Main>
    </div>
  )
}

export default Home
