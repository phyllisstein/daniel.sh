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

export const Centered = styled.div`
  position: absolute;
  top: 50%;

  width: min-content;
  padding: 0 2rem;

  transform: translateY(-50%);
`

export const Name = styled.h1`
  ${ ({ theme }) => theme.typeface.accent({
        fontSize: 6,
        lineHeight: 8,
    }) }

  font-weight: 400;

  width: max-content;
  max-width: 100vw;

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

  font-weight: 400;

  padding: 0 40% 0 0;

  ${ ({ theme }) => theme.respondTo.above(
        'sm',
        css`
      ${ ({ theme }) => theme.typeface.primary({
                fontSize: 4,
                lineHeight: 6,
            }) }

      padding: 0 35% 0 0;
        `,
    ) }

  ${ ({ theme }) => theme.respondTo.above(
        'md',
        css`
      ${ ({ theme }) => theme.typeface.primary({
                fontSize: 5,
                lineHeight: 7,
            }) }

      padding: 0 30% 0 0;
        `,
    ) }

  ${ ({ theme }) => theme.respondTo.above(
        'lg',
        css`
      ${ ({ theme }) => theme.typeface.primary({
                fontSize: 6,
                lineHeight: 8,
            }) }

      padding: 0 20% 0 0;
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

export const TitleContainer = styled.div`
  position: relative;

  width: 100vw;
  height: 100vh;
  min-height: 100vh;
`
