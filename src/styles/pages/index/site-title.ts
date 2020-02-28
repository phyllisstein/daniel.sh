import styled from 'styled-components'

export const SiteSubtitle = styled.h2`
  ${ ({ theme }) => theme.typography.accent({ fontSize: 2, lineHeight: 2 }) }
`

export const SiteTitle = styled.h1`
  ${ ({ theme }) => theme.typography.primary({ fontSize: 5, lineHeight: 5 }) }
`

export const SiteTitleContainer = styled.header`
  align-items: stretch;
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  justify-content: flex-end;
  padding: 2rem;
  text-align: center;
  width: 100%;

  ${ ({ theme }) => theme.responsive.query.greaterThan('md')`
    max-width: 66rem;
    text-align: left;
    width: 85%;
  ` }
`
