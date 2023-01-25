/* eslint-disable @typescript-eslint/indent */

import styled, { css } from 'styled-components'

export const ButtonBar = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  padding: 2rem;
`

export const Card = styled.div`
  ${ ({ theme }) => theme.animation.css({
    properties: ['border-color'],
  }) }
`

export const CardFooter = styled.div`
  ${ ({ theme }) => theme.typeface.primary({
    fontSize: 2,
    lineHeight: 2,
  }) }

  display: flex;
  align-items: center;
  justify-content: flex-end;
`

export const Centered = styled.div`
  position: absolute;
  top: 50%;

  padding: 1rem;

  transform: translateY(-50%);
`

export const Name = styled.h1`
  ${ ({ theme }) => theme.typeface.accent({
    fontSize: 6,
    lineHeight: 8,
  }) }

  font-weight: 400;

  ${ ({ theme }) => theme.respondTo.above(
    'sm',
    css`
      ${ ({ theme }) => theme.typeface.accent({
        fontSize: 8,
        leadingTop: 1,
        lineHeight: 9,
      }) }
    `,
  ) }

  ${ ({ theme }) => theme.respondTo.above(
    'md',
    css`
      ${ ({ theme }) => theme.typeface.accent({
        fontSize: 10,
        leadingTop: 2,
        lineHeight: 10,
      }) }
    `,
  ) }

  ${ ({ theme }) => theme.respondTo.above(
    'lg',
    css`
      ${ ({ theme }) => theme.typeface.accent({
        fontSize: 10,
        leadingTop: 2,
        lineHeight: 10,
      }) }
    `,
  ) }
`

export const Tagline = styled.h3`
  ${ ({ theme }) => theme.typeface.primary({
    fontSize: 3,
    lineHeight: 5,
  }) }

  width: 100%;
  font-weight: 300;

  ${ ({ theme }) => theme.respondTo.above(
    'sm',
    css`
      ${ ({ theme }) => theme.typeface.primary({
        fontSize: 4,
        lineHeight: 6,
      }) }
    `,
  ) }

  ${ ({ theme }) => theme.respondTo.above(
    'md',
    css`
      ${ ({ theme }) => theme.typeface.primary({
        fontSize: 5,
        lineHeight: 7,
      }) }
    `,
  ) }

  ${ ({ theme }) => theme.respondTo.above(
    'lg',
    css`
      ${ ({ theme }) => theme.typeface.primary({
        fontSize: 6,
        lineHeight: 8,
      }) }
    `,
  ) }
`

export const Main = styled.main`
  position: relative;

  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr;
  width: 100%;
  height: 100%;
`

export const ExperienceCards = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 2rem;

  ${ ({ theme }) => theme.respondTo.above(
    'md',
    css`
      grid-template-columns: repeat(2, 1fr);
    `,
) }
`
export const ExperienceSection = styled.section`
  position: relative;

  display: grid;
  grid-gap: 2rem;
  grid-template-rows: auto;
  grid-template-columns: 1fr;
  width: 90vw;
  height: 100vh;
  min-height: 100vh;
  margin: 3rem auto;

  ${ ({ theme }) => theme.respondTo.above(
    'lg',
    css`
      width: 75%;
    `,
  ) }
`

export const CardTitle = styled.h4`
  ${ ({ theme }) => theme.typeface.primary({
    fontSize: 5,
    leadingTop: 0,
    lineHeight: 8,
  }) }
`

export const CardSubtitle = styled.span`
  ${ ({ theme }) => theme.typeface.primary({
    fontSize: 3,
    leadingBottom: 0,
    leadingTop: 2,
    lineHeight: 5,
  }) }

  font-variant-caps: all-small-caps;
`

export const TitleContainer = styled.div`
  position: relative;

  width: 100vw;
  height: 100vh;
  min-height: 100vh;

  ${ ({ theme }) => theme.respondTo.above(
    'md',
    css`
      width: 75%;
    `,
  ) }

  ${ ({ theme }) => theme.respondTo.above(
    'lg',
    css`
      width: 60%;
    `,
  ) }
`
