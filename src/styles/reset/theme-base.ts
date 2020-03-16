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
    font-size: 112.5%;
  }

  body {
    ${ ({ theme }) => theme.typography.primary() }

    box-sizing: border-box;
    font-feature-settings: 'kern', 'liga';
    font-kerning: normal;
    font-variant-ligatures: common-ligatures;

    margin: 0;
    padding: 0;

    color: ${ ({ theme }) => theme.palette.css.text01 };

    background-color: ${ ({ theme }) => theme.palette.css.uiBackground };
  }
`
