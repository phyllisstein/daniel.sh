import {createGlobalStyle} from 'styled-components'

export const Body = createGlobalStyle`
    *,
    *::before,
    *::after {
        box-sizing: inherit;

        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;

        -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
        text-rendering: geometricPrecision;
    }

    html {
        box-sizing: border-box;
        margin: 0;
        padding: 0;

        font-size: 16px !important;

        font-kerning: normal !important;
        font-variant-ligatures: common-ligatures !important;
        font-variant-numeric: oldstyle-nums proportional-nums !important;
    }

    body {
        --spectrum-font-family-base: 'Adobe Clean' !important;
        --spectrum-alias-body-text-font-family: 'Adobe Clean' !important;

        ${({theme}) => theme.typeface.primary()}

        color: ${({theme}) => theme.paletteDark.css.gray900};
        background-color: ${({theme}) => theme.paletteDark.css.gray100};
    }
`
