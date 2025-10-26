"use client";

import { createGlobalStyle } from "styled-components";

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
        ${ ({ theme }) => theme.typeface.primary({
            fontSize: 2,
            lineHeight: 3,
        }) }

        /* color: ${ ({ theme }) => theme.palette.p3.gray900 }; */
        /* background-color: ${ ({ theme }) => theme.palette.p3.gray100 }; */
    }
`;
