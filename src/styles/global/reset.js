import { createGlobalStyle } from 'styled-components'

const Reset = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: inherit;
    outline: none;
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  }

  html {
    font: normal normal 400 62.5%/1.777 serif;
  }

  body {
    background-color: #FFF;
    box-sizing: border-box;
    color: rgba(0, 0, 0, 0.87);
    font-family: ${ ({ theme }) => theme.typography.primaryStack };
    font-feature-settings: 'kern', 'liga';
    font-kerning: normal;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-variant-ligatures: common-ligatures;
    text-rendering: optimizeLegibility;
  }

  b,
  strong {
    font-weight: 700;
  }

  html,
  body,
  main {
    height: 100%;
    overflow: hidden;
    width: 100%;
  }

  p {
    ${ ({ theme }) => theme.plumber() }
  }
`

export default Reset
