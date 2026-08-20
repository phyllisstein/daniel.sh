"use client";

import { type HTMLAttributes } from "react";
import styled from "styled-components";

interface ActionButtonIconProps extends HTMLAttributes<HTMLDivElement> {
    label: string
}

const Wrapper = styled.div`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 2rem;

    fill: ${ ({ theme }) => theme.palette.gray800 };
`;

export function ActionButtonIcon({ children, className = "", label, ...props }: ActionButtonIconProps) {
    return (
        <Wrapper
            aria-hidden="true"
            aria-label={ label }
            className={ `spectrum-Icon spectrum-Icon--sizeL spectrum-ActionButton-icon ${ className }` }
            focusable="false"
            role="img"
            { ...props }>
            { children }
        </Wrapper>
    );
}
