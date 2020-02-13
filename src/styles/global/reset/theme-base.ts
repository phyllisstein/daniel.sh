import { createGlobalStyle } from 'styled-components'

export const ThemeBase = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: inherit;
    outline: none;
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  }

  html {
    font-size: 100%;

    ${ ({ theme }) => theme.responsive.query.greaterThan('lg')`
      font-size: 112.5%;
    ` }
  }

  body {
    ${ ({ theme }) => theme.typography.primary() }

    box-sizing: border-box;
    font-feature-settings: 'kern', 'liga';
    font-kerning: normal;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-variant-ligatures: common-ligatures;
    margin: 0;
    padding: 0;
    text-rendering: optimizeLegibility;
  }

  b,
  strong {
    font-weight: 700;
  }

  p {
    text-indent: 0;

    & + p {
      text-indent: 1.999rem;
    }
  }
`
