"use client";


import BrowserDarkSvg from "assets/browser-dark.svg";
import BrowserLightSvg from "assets/browser-light.svg";
import type { ReactNode } from "react";
import { styled } from "styled-components";


const Wrapper = styled.figure`
    position: relative;
`;

const Children = styled.div`
    position: absolute;

    width: 85%;
    height: 75%;

    inset: 15% 10% 5% 5%;
`;


export function DemoBrowser({
    children, dark = false,
}: {
    children: ReactNode
    dark?: boolean
}) {
    const BrowserSvg = dark ? BrowserDarkSvg : BrowserLightSvg;
    const color = dark ? "white" : "black";

    return (
        <Wrapper>
            <BrowserSvg />
            <Children style={{ color }}>{ children }</Children>
        </Wrapper>
    );
}
