import { faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/sharp-solid-svg-icons'

import {
  ButtonBar,
  Main,
  Name,
  Section,
  Tagline,
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
    </Main>
  )
}
