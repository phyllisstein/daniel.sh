"use client";

import { createGlobalStyle, css } from "styled-components";


const fontFaces = css`
    @font-face {
        font-weight: 400;
        font-family: "PragmataPro";
        font-style: normal;
        src: url("/fonts/pragmatapro/PragmataProR_liga_Serif.woff2") format("woff2");

        font-display: swap;
    }

    @font-face {
        font-weight: 400;
        font-family: "PragmataPro";
        font-style: italic;
        src: url("/fonts/pragmatapro/PragmataProI_liga_Serif.woff2") format("woff2");

        font-display: swap;
    }

    @font-face {
        font-weight: 700;
        font-family: "PragmataPro";
        font-style: normal;
        src: url("/fonts/pragmatapro/PragmataProB_liga_Serif.woff2") format("woff2");

        font-display: swap;
    }

    @font-face {
        font-weight: 700;
        font-family: "PragmataPro";
        font-style: italic;
        src: url("/fonts/pragmatapro/PragmataProZ_liga_Serif.woff2") format("woff2");

        font-display: swap;
    }
`;

export const PragmataPro = createGlobalStyle`
    ${ fontFaces }
`;
