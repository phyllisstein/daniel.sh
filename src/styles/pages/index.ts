/* eslint-disable @typescript-eslint/indent */

import { css, styled } from 'styled-components'

export const Centered = styled.div`
  position: absolute;
  top: 50%;
  
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 1rem;
  
  transform: translateY(-50%);
`

export const Container = styled.div`
  position: relative;
  
  width: 100vw;
  height: 100vh;
  
  ${ ({ theme }) => theme.respondTo.above(
    'md',
    css`
      width: 85%;
    `,
  ) }
  
  ${ ({ theme }) => theme.respondTo.above(
    'lg',
    css`
      width: 66%
    `,
  ) }
`

export const Dek = styled.h3`
  ${ ({ theme }) => theme.typeface.accent({
    fontSize: 4,
    lineHeight: 6,
  }) }
  
  font-weight: 400;
  
  ${ ({ theme }) => theme.respondTo.above(
    'sm',
    css`
      ${ ({ theme }) => theme.typeface.accent({
        fontSize: 6,
        leadingTop: 1,
        lineHeight: 7,
      }) }
    `,
  ) }
  
  ${ ({ theme }) => theme.respondTo.above(
    'md',
    css`
      ${ ({ theme }) => theme.typeface.accent({
        fontSize: 7,
        lineHeight: 9,
      }) }
    `,
  ) }
  
  ${ ({ theme }) => theme.respondTo.above(
    'lg',
    css`
      ${ ({ theme }) => theme.typeface.accent({
        fontSize: 8,
        lineHeight: 10,
      }) }
    `,
  ) }
`

export const Hed = styled.h1`
  ${ ({ theme }) => theme.typeface.primary({
    fontSize: 2,
    lineHeight: 3,
  }) }

  width: 100%;
  font-weight: 300;

  ${ ({ theme }) => theme.respondTo.above(
    'sm',
    css`
      ${ ({ theme }) => theme.typeface.primary({
        fontSize: 3,
        lineHeight: 4,
      }) }
    `,
  ) }

  ${ ({ theme }) => theme.respondTo.above(
    'md',
    css`
      ${ ({ theme }) => theme.typeface.primary({
        fontSize: 3,
        lineHeight: 5,
      }) }
    `,
  ) }

  ${ ({ theme }) => theme.respondTo.above(
    'lg',
    css`
      ${ ({ theme }) => theme.typeface.primary({
        fontSize: 4,
        lineHeight: 6,
      }) }
    `,
  ) }
`
