"use client";

import { useServerInsertedHTML } from "next/navigation";
import { type ReactNode, useState } from "react";
import { RecoilRoot } from "recoil";
import { ServerStyleSheet, StyleSheetManager, ThemeProvider } from "styled-components";

import { theme } from "styles/theme";

export function StyledComponentsRegistry({ children }: { children: ReactNode }) {
    // Only create stylesheet once with lazy initial state
    // x-ref: https://reactjs.org/docs/hooks-reference.html#lazy-initial-state
    const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet());

    useServerInsertedHTML(() => {
        const styles = styledComponentsStyleSheet.getStyleElement();
        styledComponentsStyleSheet.instance.clearTag();
        return <>{ styles }</>;
    });

    const innerComponents = (
        <RecoilRoot>
            <ThemeProvider theme={ theme }>
                { children }
            </ThemeProvider>
        </RecoilRoot>
    );

    if (typeof window !== "undefined") return innerComponents;

    return (
        <StyleSheetManager sheet={ styledComponentsStyleSheet.instance }>
            { innerComponents }
        </StyleSheetManager>
    );
}
