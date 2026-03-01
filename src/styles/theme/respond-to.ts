import { css, type RuleSet } from "styled-components";

/* eslint-disable sort-keys-plus/sort-keys -- keep natural-looking size order */
const breakpoints = {
    sm: "425px",
    md: "672px",
    lg: "1056px",
    xlg: "1312px",
    max: "1584px",
};

type Breakpoint = keyof typeof breakpoints;

export const between = (
    start: Breakpoint,
    end: Breakpoint,
    style: RuleSet<object>,
) => css`
    @media (min-width: ${ breakpoints[start] }) and (max-width: ${ breakpoints[end] }) {
        ${ style }
    }
`;

export const above = (breakpoint: Breakpoint, style: RuleSet<object>) => css`
    @media (min-width: ${ breakpoints[breakpoint] }) {
        ${ style }
    }
`;

export const below = (breakpoint: Breakpoint, style: RuleSet<object>) => css`
    @media (max-width: ${ breakpoints[breakpoint] }) {
        ${ style }
    }
`;
