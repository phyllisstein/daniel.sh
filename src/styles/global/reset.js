import { css } from '@emotion/core'

const reset = theme => css`
  *,
  *::before,
  *::after {
    box-sizing: inherit;
    outline: none;
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  }

  html {
    font-size: 62.5%;

    ${ theme.media.greaterThan('md')`
      font-size: 70%;
    ` }
  }

  body {
    ${ theme.plumber() }

    background-color: #FFF;
    box-sizing: border-box;
    color: rgba(0, 0, 0, 0.87);
    font-family: ${ theme.typography.primaryStack };
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

export default reset
