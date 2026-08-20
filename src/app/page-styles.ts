"use client";

import styled from "styled-components";
import THEME from "styles/theme";


export const Name = styled.h1`
    ${ THEME.typeface.accentFamily }
    display: inline;

    max-width: 100%;
    padding: 0;
    padding-left: 5px;

    font-size: clamp(1rem, 6vw, 5rem);
    font-weight: 400;
    line-height: 1;

    @media (min-width: 672px) {
        position: absolute;
        bottom: 0;
        transform: translateY(100%);

        display: block;

        padding: 0;
        ${ THEME.typeface.accent({
            fontSize: 10,
            lineHeight: 10,
        }) }
    }
`;

export const Tagline = styled.h3`
    ${ THEME.typeface.primaryFamily }
    display: inline;
    font-size: clamp(1rem, 5vw, 4rem);
    font-weight: 400;
    line-height: 1.6;

    @media (min-width: 672px) {
        position: relative;
        top: 50%;

        display: block;

        padding: 0;
        padding-right: 5vw;
        ${ THEME.typeface.primary({
            fontSize: 4,
            lineHeight: 6,
        }) }
    }
`;

export const Hero = styled.div`
    position: relative;

    max-width: 100%;
    height: 100%;
    padding-right: 5vw;
    padding-left: 5vw;

    @media (min-width: 672px) {
        transform: translateY(100%);
        height: min-content;
    }
`;

export const Main = styled.main`
    position: relative;

    overflow: auto hidden;
    display: flex;
    flex-direction: row;
    align-items: stretch;
    justify-content: flex-start;

    width: max-content;
    height: 100vh;
`;

export const Section = styled.div`
    width: 100vw;
    height: 100vh;
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
`;

export const TextContainer = styled.article`
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: center;

    width: 100%;
    padding: 0 5vw;
`;

export const Graf = styled.p`
    ${ THEME.typeface.primary({
        fontSize: 2,
        lineHeight: 3,
    }) }

    & + & {
        ${ THEME.typeface.primary({
            fontSize: 2,
            leadingTop: 1,
            lineHeight: 3,
        }) }
    }
`;

export const VoxLink = styled.a`
    color: ${ THEME.paletteBrands.oklch.vox };
`;

export const ActUpLink = styled.a`
    color: ${ THEME.paletteBrands.oklch.actUp };
`;

export const BauerLink = styled.a`
    color: ${ THEME.paletteBrands.oklch.bauer };
`;
