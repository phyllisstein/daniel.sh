import styled from 'styled-components'

export const SiteSubtitle = styled.h2`
  ${ ({ theme }) => theme.typography.accent({ fontSize: 2, lineHeight: 2 }) }
`

export const SiteTitle = styled.h1`
  ${ ({ theme }) => theme.typography.primary({ fontSize: 5, lineHeight: 5 }) }
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

  ${ ({ theme }) => theme.responsive.query.greaterThan('md')`
    text-align: left;
    width: 85%;
  ` }
`
