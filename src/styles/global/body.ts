"use client";

import { createGlobalStyle } from "styled-components";
import { rgb } from "styles/theme/palette-spectrum-dark";

export const Body = createGlobalStyle`
    *,
    *::before,
    *::after {
        box-sizing: inherit;
    }

    html {
        box-sizing: border-box;
        margin: 0;
        padding: 0;

        font-size: 10px;

        font-kerning: normal;
        font-variant-ligatures: common-ligatures;
        font-variant-numeric: lining-nums proportional-nums;
        text-rendering: geometricPrecision;
    }

    body {
        color: ${ rgb.gray900 };
        background-color: ${ rgb.gray100 } !important;
    }
`;
