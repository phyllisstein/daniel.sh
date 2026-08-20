"use client";

import styled, { css } from "styled-components";
import THEME from "styles/theme";

export const ButtonBar = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    padding: 2rem;
`;

export const Name = styled.h1`
    ${ THEME.typeface.accent({
        fontSize: 6,
        lineHeight: 8,
    }) }

    position: absolute;
    top: 50%;

    max-width: 100%;
    padding: 0 5vw;

    font-weight: 400;

    ${ THEME.respondTo.above(
        "md",
        css`
            ${ THEME.typeface.accent({
                fontSize: 8,
                lineHeight: 8,
            }) }
    `,
    ) }

    ${ THEME.respondTo.above(
        "lg",
        css`
            ${ THEME.typeface.accent({
                fontSize: 10,
                lineHeight: 10,
            }) }
    `,
    ) }

    ${ THEME.respondTo.above(
        "xlg",
        css`
            ${ THEME.typeface.accent({
                fontSize: 10,
                lineHeight: 10,
            }) }
    `,
    ) }
`;

export const Tagline = styled.h3`
    ${ THEME.typeface.primary({
        fontSize: 3,
        lineHeight: 5,
    }) }

    position: absolute;
    top: 50%;

    max-width: 100%;
    padding-right: 5vw;
    padding-left: 5vw;

    font-weight: 400;

    transform: translateY(-100%);

    ${ THEME.respondTo.above(
        "sm",
        css`
            ${ THEME.typeface.primary({
                fontSize: 4,
                lineHeight: 6,
            }) }

            padding-right: 20%;
    `,
    ) }

    ${ THEME.respondTo.above(
        "md",
        css`
            ${ THEME.typeface.primary({
                fontSize: 5,
                lineHeight: 7,
            }) }

            padding-right: 35%;
    `,
    ) }

    ${ THEME.respondTo.above(
        "lg",
        css`
            ${ THEME.typeface.primary({
                fontSize: 6,
                lineHeight: 8,
            }) }

            padding-right: 35%;
    `,
    ) }

    ${ THEME.respondTo.above(
        "xlg",
        css`
            padding-right: 45%;
    `,
    ) }
`;

export const Main = styled.main`
    position: relative;

    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr 1fr;
    width: 100%;
    height: 100%;
    overflow-x: auto;
    overflow-y: hidden;
`;

export const Section = styled.div`
    position: relative;

    width: 100vw;
    height: 100vh;
    min-height: 100vh;
    overflow-x: hidden;
    overflow-y: auto;
`;

export const SectionTitle = styled.h1`
    ${ THEME.typeface.accent({
        fontSize: 6,
        lineHeight: 8,
    }) }

    position: absolute;
    top: 50vh;

    max-width: 100%;
    padding: 0 5vw;

    font-weight: 400;

    ${ THEME.respondTo.above(
        "md",
        css`
            ${ THEME.typeface.accent({
                fontSize: 8,
                lineHeight: 8,
            }) }
    `,
    ) }

    ${ THEME.respondTo.above(
        "lg",
        css`
            ${ THEME.typeface.accent({
                fontSize: 10,
                lineHeight: 10,
            }) }
    `,
    ) }

    ${ THEME.respondTo.above(
        "xlg",
        css`
            ${ THEME.typeface.accent({
                fontSize: 10,
                lineHeight: 10,
            }) }
    `,
    ) }
`;

export const TextContainer = styled.article`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: center;
    width: 100%;
    padding: 0 5vw;
    overflow-y: auto;

    ${ THEME.respondTo.above(
        "md",
        css`
            transform: translateY(calc(50vh + ${ THEME.scale.css(8) }));
    `,
    ) }
`;

export const Graf = styled.p`
    ${ THEME.typeface.primary({
        fontSize: 2,
        lineHeight: 3,
    }) }

    ${ THEME.respondTo.above(
        "md",
        css`
    ${ THEME.typeface.primary({
        fontSize: 4,
        lineHeight: 5,
    }) }
    `,
    ) }

    & + & {
        ${ THEME.typeface.primary({
            fontSize: 2,
            leadingTop: 1,
            lineHeight: 3,
        }) }

        ${ THEME.respondTo.above(
            "md",
            css`
                ${ THEME.typeface.primary({
                    fontSize: 4,
                    leadingTop: 2,
                    lineHeight: 5,
                }) }
      `,
        ) }
    }
`;
