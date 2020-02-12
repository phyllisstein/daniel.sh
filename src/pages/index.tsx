import {
  Column,
  Grid,
  H,
  Row,
} from 'components'
import { faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons'
import {
  Hero,
  Nav,
  Root,
  Segment,
} from 'styles/pages/index'
import React, { FunctionComponent } from 'react'
import { Add16 } from '@carbon/icons-react'
import { Button } from 'carbon-components-react'
import { faPaperPlane } from '@fortawesome/pro-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Index: FunctionComponent = () => {
  return (
    <Root>
      <Segment borderColor='candy'>
        <Hero>
          <Grid full>
            <Row>
              <Column medium={ 6 } small={ 4 }>
                <H primary size={ 4 }>
                  I’m a full-stack engineer and lapsed essayist applying an
                  exacting editorial eye to building a more daring web.
                </H>
                <H size={ 1 }>
                  You can call me Daniel.
                </H>
              </Column>
            </Row>
            <Nav>
              <Button
                hasIconOnly
                href='https://twitter.com/phyllisstein'
                iconDescription='Twitter'
                kind='ghost'
                renderIcon={ props => <FontAwesomeIcon { ...props } icon={ faTwitter } /> }
                target='_blank'
                tooltipAlignment='center'
                tooltipPosition='top' />
              <Button
                hasIconOnly
                href='https://linkedin.com/in/danielsh1'
                iconDescription='LinkedIn'
                kind='ghost'
                renderIcon={ props => <FontAwesomeIcon { ...props } icon={ faLinkedinIn } /> }
                target='_blank'
                tooltipAlignment='center'
                tooltipPosition='top' />
              <Button
                hasIconOnly
                href='mailto:daniel@daniel.sh'
                iconDescription='Email'
                kind='ghost'
                renderIcon={ props => <FontAwesomeIcon { ...props } icon={ faPaperPlane } /> }
                target='_blank'
                tooltipAlignment='center'
                tooltipPosition='top' />
            </Nav>
          </Grid>
        </Hero>
      </Segment>
    </Root>
  )
}

export default Index
