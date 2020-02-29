import {
  Button,
  Card,
  CardContents,
  CardHero,
  CardTitle,
  H,
  Header,
  Masonry,
  P,
  Segment,
  SegmentWrapper,
} from 'components'
import { Column, Grid, Row } from 'carbon-components-react'
import { faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faPaperPlane, faPencil, faReplyAll } from '@fortawesome/pro-regular-svg-icons'
import {
  Hero,
  SiteSubtitle,
  SiteTitle,
  SiteTitleContainer,
} from './index-styles'
import React, { FunctionComponent, ReactNode, useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'
import _ from 'lodash'
import { addEventListener } from 'consolidated-events'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useMedia } from 'hooks'
import { useSpring } from 'react-spring'

const wrapSection = (section: number) => {
  if (section > 2) {
    return 0
  } else if (section < 0) {
    return 2
  } else {
    return section
  }
}

const Index: FunctionComponent = () => {
  const root = useRef<ReactNode>(null)
  const [section, setSection] = useState(0)
  const isScrolling = useRef(false)
  const styles = useSpring({
    from: { scrollLeft: window.scrollX },
    onRest: () => isScrolling.current = false,
    to: { scrollLeft: section * window.innerWidth },
  })

  const handleWheel = useCallback(
    _.debounce((event: WheelEvent) => {
      if (Math.abs(event.deltaY) > 0) {
        return
      }

      event.preventDefault()

      if (event.deltaX >= 1 && !isScrolling.current) {
        isScrolling.current = true
        setSection(wrapSection(section + 1))
      } else if (event.deltaX <= -1 && !isScrolling.current) {
        isScrolling.current = true
        setSection(wrapSection(section - 1))
      }
    }, 0, { leading: true, trailing: false }),
    [section],
  )

  useEffect(
    () => addEventListener(root.current, 'wheel', handleWheel, { capture: true, passive: false }),
  )

  const columns = useMedia(['(min-width: 1312px)', '(min-width: 672px)'], [3, 2], 1)

  const pencilIcon = useCallback(() => <FontAwesomeIcon icon={ faPencil } style={{ marginLeft: '0.5em' }} />, [])
  const replyAllIcon = useCallback(() => <FontAwesomeIcon icon={ faReplyAll } style={{ marginLeft: '0.5em' }} />, [])
  const twitterIcon = useCallback(() => <FontAwesomeIcon icon={ faTwitter } style={{ marginLeft: '0.5em' }} />, [])
  const linkedInIcon = useCallback(() => <FontAwesomeIcon icon={ faLinkedinIn } style={{ marginLeft: '0.5em' }} />, [])
  const paperPlaneIcon = useCallback(() => <FontAwesomeIcon icon={ faPaperPlane } style={{ marginLeft: '0.5em' }} />, [])

  return (
    <SegmentWrapper scrollLeft={ styles.scrollLeft } ref={ root }>
      <Segment borderColor='candy'>
        <Hero>
          <SiteTitleContainer>
            <SiteSubtitle>
              I’m a full-stack web developer and lapsed essayist who brings an
              exacting editorial eye to bear on building a more daring web.
            </SiteSubtitle>
            <SiteTitle>
              You can call me Daniel.
            </SiteTitle>
          </SiteTitleContainer>
          <div style={{ flex: '1 1 auto' }} />
          <Grid style={{ alignItems: 'center', alignSelf: 'center', display: 'flex', flex: '0 0 auto', justifyContent: 'center' }}>
            <Row style={{ padding: '2rem' }}>
              <Column>
                <Button
                  iconDescription='Blog'
                  kind='ghost'
                  renderIcon={ pencilIcon }
                  onClick={ () => setSection(1) }>
                  Blog
                </Button>
              </Column>
              <Column>
                <Button
                  iconDescription='Contact'
                  kind='ghost'
                  renderIcon={ replyAllIcon }
                  onClick={ () => setSection(2) }>
                  Contact
                </Button>
              </Column>
            </Row>
          </Grid>
        </Hero>
      </Segment>
      <Segment borderColor='lilac'>
        <Header>
          <H primary size={ 1 }>Blog</H>
        </Header>
        <Grid>
          <Row>
            <Masonry columns={ columns }>
              <Column md={ 4 } xlg={ 5 }>
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
              <Column md={ 4 } xlg={ 5 }>
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
              <Column md={ 4 } xlg={ 5 }>
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
              <Column md={ 4 } xlg={ 5 }>
                <Card>
                  <CardTitle subtitle='Subbed title that extends way beyond the title'>
                    A longer title: Genesis ipsum
                  </CardTitle>
                  <CardHero src='https://placekitten.com/1024/768' />
                  <CardContents>
                    <P>
                      So the LORD God said to them, Be fruitful and multiply,
                      and fill the waters in the seas, and let them have
                      dominion over the fish of the sea, and over the face of
                      the waters. So the LORD God had taken from the earth, and
                      every tree of the second river is Gihon; it is the one
                      that flows around the whole land of Cush. But of the tree
                      that is upon the face of the deep, while a wind from God
                      swept over the cattle, and to the birds of the air, and
                      brought her to the man.
                    </P>
                  </CardContents>
                </Card>
              </Column>
            </Masonry>
          </Row>
        </Grid>
      </Segment>
      <Segment borderColor='canada'>
        <Hero>
          <Header>
            <H primary size={ 1 }>Contact</H>
          </Header>
          <Grid style={{ alignItems: 'center', display: 'flex', flex: '1 0 auto', justifyContent: 'center' }}>
            <Row>
              <Column>
                <Button
                  href='https://twitter.com/phyllisstein'
                  iconDescription='Twitter'
                  kind='ghost'
                  renderIcon={ twitterIcon }
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
                  renderIcon={ linkedInIcon }
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
                  renderIcon={ paperPlaneIcon }
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
    </SegmentWrapper>
  )
}

export default Index
