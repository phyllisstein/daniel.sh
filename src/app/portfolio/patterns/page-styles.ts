"use client";


import styled from "styled-components";


export const PageContainer = styled.section`
    display: grid;
    grid-template-columns: 1fr;
`;

export const PatternContainer = styled.article`
    display: grid;
`;

export const PatternTitle = styled.h2`
    ${ ({ theme }) => theme.typeface.ext({ fontSize: 6, leadingBottom: 1, leadingTop: 6, lineHeight: 4 }) }

    font-weight: 900;
    letter-spacing: -0.04em;

    font-variant-caps: all-small-caps;
`;
