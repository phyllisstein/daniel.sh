import { faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/sharp-solid-svg-icons'

import {
  ButtonBar,
  Graf,
  Main,
  Name,
  Section,
  SectionTitle,
  Tagline,
  TextContainer,
} from './page-styles'

export default function Home() {
  return (
    <Main>
      <Section>
        <Tagline>
          I’m a full-stack engineer and architect who brings insight and craftsmanship
          to ambitious software projects.
        </Tagline>
        <Name>
          You can call me Daniel.
        </Name>
        <ButtonBar className='spectrum-QuickActions-overlay'>
          <div className='spectrum-ActionGroup spectrum-ActionGroup--quiet'>
            <a className='spectrum-ActionButton spectrum-ActionButton--sizeL spectrum-ActionButton--quiet' href='mailto:daniel@daniel.sh'>
              <FontAwesomeIcon fixedWidth className='spectrum-Icon spectrum-Icon--sizeL spectrum-ActionButton-icon' icon={ faPaperPlane } style={{ padding: '0.5rem' }} />
            </a>
            <a className='spectrum-ActionButton spectrum-ActionButton--sizeL spectrum-ActionButton--quiet' href='https://twitter.com/phyllisstein'>
              <FontAwesomeIcon fixedWidth className='spectrum-Icon spectrum-Icon--sizeL spectrum-ActionButton-icon' icon={ faTwitter } style={{ padding: '0.5rem' }} />
            </a>
            <a className='spectrum-ActionButton spectrum-ActionButton--sizeL spectrum-ActionButton--quiet' href='https://linkedin.com/in/danielsh1'>
              <FontAwesomeIcon fixedWidth className='spectrum-Icon spectrum-Icon--sizeL spectrum-ActionButton-icon' icon={ faLinkedinIn } style={{ padding: '0.5rem' }} />
            </a>
          </div>
        </ButtonBar>
      </Section>
      <Section>
        <SectionTitle>Hi there.</SectionTitle>
        <TextContainer>
          <Graf>
            And guess what else is back. My breakfast? My friskiness. Mama horny
            Michael. I am having a love affair with this ice cream sandwich. Everyone’s
            laughing, and riding, and cornholing except Buster. Oh…yeah…the guy in the…the
            $4,000 suit is holding the elevator for a guy who doesn’t make that in three
            months. Come on!
          </Graf>
          <Graf>
            Do you guys know where I could get one of those gold necklaces with the T on it?
            That’s a cross. Across from where?
          </Graf>
          <Graf>
            And the soup of the day is bread. Heyyyy uncle father Oscar. The only thing I
            found in the fridge was a dead dove in a bag. She keeps saying that God is going
            to show me a sign. The… something of my ways. Wisdom?
          </Graf>
          <Graf>
            Michael, look, this has got to stop. I mean, flattered? Yes. Interested? Not
            tonight. Interfere? I ought to pull down your pants and spank your ass raw.
          </Graf>
        </TextContainer>
      </Section>
    </Main>
  )
}
