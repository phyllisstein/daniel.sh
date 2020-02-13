import { Button, Column, Grid, Row } from 'carbon-components-react'
import {
  Card,
  CardContents,
  CardHero,
  CardTitle,
  H,
  Masonry,
  P,
} from 'components'
import { faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faPaperPlane, faPencil, faReplyAll } from '@fortawesome/pro-regular-svg-icons'
import {
  Header,
  Hero,
  Root,
  Segment,
} from 'styles/pages/index'
import React, { FunctionComponent, ReactNode, useCallback, useEffect, useRef, useState } from 'react'
import _ from 'lodash'
import { addEventListener } from 'consolidated-events'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useMedia } from 'hooks'
import { useSpring } from 'react-spring'

const clampSection = _.partial(_.clamp, _.partial.placeholder, 0, 2)

const Index: FunctionComponent = () => {
  const root = useRef<ReactNode>(null)
  const [section, setSection] = useState(0)
  const isScrolling = useRef(false)
  const styles = useSpring({
    onRest: () => isScrolling.current = false,
    scrollLeft: section * window.innerWidth,
  })

  const handleWheel = useCallback(
    (event: WheelEvent) => {
      if (Math.abs(event.deltaY) >= 1) {
        return
      }

      if (isScrolling.current) {
        event.preventDefault()
      } else if (event.deltaX >= 10) {
        event.preventDefault()
        isScrolling.current = true
        setSection(clampSection(section + 1))
      } else if (event.deltaX <= -10) {
        event.preventDefault()
        isScrolling.current = true
        setSection(clampSection(section - 1))
      }
    },
    [section],
  )

  useEffect(
    () => addEventListener(root.current, 'wheel', handleWheel, { passive: false }),
  )

  const columns = useMedia(['(min-width: 672px)'], [2], 1)

  return (
    <Root scrollLeft={ styles.scrollLeft } ref={ root }>
      <Segment borderColor='candy'>
        <Hero>
          <Grid>
            <Row>
              <Column md={ 6 } sm={ 4 }>
                <H primary size={ 4 }>
                  I’m a full-stack engineer and lapsed essayist applying an
                  exacting editorial eye to building a more daring web.
                </H>
                <H size={ 1 }>
                  You can call me Daniel.
                </H>
              </Column>
            </Row>
            <Row>
              <Column md={ 3 } sm={ 2 }>
                <Button
                  iconDescription='Blog'
                  kind='ghost'
                  renderIcon={ props => <FontAwesomeIcon { ...props } icon={ faPencil } /> }
                  onClick={ () => setSection(1) }>
                  Blog
                </Button>
              </Column>
              <Column md={ 3 } sm={ 2 }>
                <Button
                  iconDescription='Contact'
                  kind='ghost'
                  renderIcon={ props => <FontAwesomeIcon { ...props } icon={ faReplyAll } /> }
                  onClick={ () => setSection(2) }>
                  Contact
                </Button>
              </Column>
            </Row>
          </Grid>
        </Hero>
      </Segment>
      <Segment borderColor='burnt'>
        <Header>
          <H primary size={ 1 }>Blog</H>
        </Header>
        <Grid>
          <Row>
            <Masonry columns={ columns }>
              <Column md={ 4 }>
                <Card>
                  <CardTitle subtitle='Subbed title'>
                    Titillatingly titular
                  </CardTitle>
                  <CardHero src='https://placekitten.com/768/640' />
                  <CardContents>
                    <P>
                      The name of the field and every bird of the sea, and over
                      the day and over the face of the ground the LORD God sent
                      him forth from the night; and let them have dominion over
                      the cattle, and over all the wild animals of the earth.
                      For God knows that when you eat of it you were taken; you
                      are dust, and to dust you shall eat bread until you return
                      to the ground, and breathed into his nostrils the breath
                      of life, I have given every green plant for food.
                    </P>
                    <P>
                      And it was very good. And there was evening and there was
                      light. A river flows out of Eden he placed the cherubim,
                      and a sword flaming and turning to guard the way to the
                      woman, Did God say, &lsquo;You shall not eat from any tree in
                      the garden&rsquo;? He drove out the man; and at the east of the
                      garden at the time of the evening breeze, and the man called
                      every living creature, that was its name. I will put enmity
                      between you and the earth when they were created. In the
                      day from the waters that were under the dome and separated
                      the waters in the day that you eat of it you were naked?
                      Have you eaten from the earth, and water the garden, and
                      from there it divides and becomes four branches.
                    </P>
                  </CardContents>
                </Card>
              </Column>
              <Column md={ 4 }>
                <Card>
                  <CardTitle subtitle='Subbed title that extends way beyond the title'>
                    Titillatingly titular
                  </CardTitle>
                  <CardHero src='https://placekitten.com/640/480' />
                  <CardContents>
                    <P>
                      And God saw that the light was good; and God separated the
                      light from the darkness. Then the LORD God sent him forth
                      from the garden of Eden to till the ground. And to the man
                      became a living being. And God saw that it was very good.
                      And there was evening and there he put the man whom he had
                      formed. So out of the air and over every creeping thing that
                      creeps upon the earth. And it was a delight to the man he
                      said, Because you have listened to the voice of your face
                      you shall eat all the days of your life.
                    </P>
                  </CardContents>
                </Card>
              </Column>
              <Column md={ 4 }>
                <Card>
                  <CardTitle subtitle='Subbed title that extends way beyond the title'>
                    A longer title: Genesis ipsum
                  </CardTitle>
                  <CardHero src='https://placekitten.com/1024/768' />
                  <CardContents>
                    <P>
                      He said, I heard
                      the sound of the sea and over the face of the ground because
                      of you; in toil you shall eat bread until you return to the
                      ground, for out of it you shall die. The earth brought forth
                      vegetation: plants yielding seed that is pleasant to the sight
                      and good for food, the tree of which I commanded you not to eat?
                    </P>
                  </CardContents>
                </Card>
              </Column>
            </Masonry>
          </Row>
        </Grid>
      </Segment>
      <Segment borderColor='canada'>
        <Header>
          <H primary size={ 1 }>Contact</H>
        </Header>
        <Hero style={{ height: '80vh' }}>
          <Grid>
            <Row>
              <Column>
                <Button
                  href='https://twitter.com/phyllisstein'
                  iconDescription='Twitter'
                  kind='ghost'
                  renderIcon={ props => <FontAwesomeIcon { ...props } icon={ faTwitter } /> }
                  target='_blank'
                  tooltipAlignment='center'
                  tooltipPosition='top'>
                  Twitter
                </Button>
              </Column>
              <Column>
                <Button
                  href='https://linkedin.com/in/danielsh1'
                  iconDescription='LinkedIn'
                  kind='ghost'
                  renderIcon={ props => <FontAwesomeIcon { ...props } icon={ faLinkedinIn } /> }
                  target='_blank'
                  tooltipAlignment='center'
                  tooltipPosition='top'>
                  LinkedIn
                </Button>
              </Column>
              <Column>
                <Button
                  href='mailto:daniel@daniel.sh'
                  iconDescription='Email'
                  kind='ghost'
                  renderIcon={ props => <FontAwesomeIcon { ...props } icon={ faPaperPlane } /> }
                  target='_blank'
                  tooltipAlignment='center'
                  tooltipPosition='top'>
                  Email
                </Button>
              </Column>
            </Row>
          </Grid>
        </Hero>
      </Segment>
    </Root>
  )
}

export default Index
