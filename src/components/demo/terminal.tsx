"use client";

import TerminalSvg from "assets/terminal.svg";
import type { ReactNode } from "react";
import { styled } from "styled-components";


const Wrapper = styled.figure`
    position: relative;
`;

const Children = styled.div`
    position: absolute;

    width: 70%;
    height: 50%;

    color: white;

    inset: 30% 15% 10%;
`;


export function DemoTerminal({
    children,
}: {
    children: ReactNode
}) {
    return (
        <Wrapper>
            <TerminalSvg />
            <Children>{ children }</Children>
        </Wrapper>
    );
}
