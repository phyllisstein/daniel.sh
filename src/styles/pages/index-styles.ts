import styled, { css } from 'styled-components'

export const Hero = styled.article`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
  width: 100%;
  height: 100%;

  ${ ({ theme }) => theme.responsive.lessThan('md', css`
    text-align: center;
  `) }
`

export const SiteSubtitle = styled.h2`
  ${ ({ theme }) => theme.typography.accent({ fontSize: 3, lineHeight: 3 }) }

  color: ${ ({ theme }) => theme.palette.css.text02 };
  font-weight: 200;
`

export const SiteTitle = styled.h1`
  ${ ({ theme }) => theme.typography.primary({ fontSize: 6, lineHeight: 6 }) }
`

export const SiteTitleContainer = styled.header`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-end;
  width: 100%;
  max-width: 66rem;
  padding: 2rem;

  text-align: center;

  ${ ({ theme }) => theme.responsive.greaterThan('md', css`
    width: 80%;

    text-align: left;
  `) }
`
