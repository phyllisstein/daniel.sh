import type { ReactNode } from "react";
import Script from "next/script";
import type { Metadata } from "next";

import { Body, Preflight } from "styles/global";
import { Charlie, MaisonNeue } from "styles/fonts";
import { StyledComponentsRegistry } from "styles/global";

export const metadata: Metadata = {
    title: {
        default: "Software Engineer and Architect | Daniel P. Shannon",
        template: "%s | Daniel P. Shannon",
    },
};

export default function Layout ({ children }: { children: ReactNode }) {
    return (
        <html lang="en-us">
            <body>
                <StyledComponentsRegistry>
                    <Preflight />
                    <Body />
                    <Charlie />
                    <MaisonNeue />
                    { children }
                </StyledComponentsRegistry>
            </body>
            <Script src="/hyphenopoly.js" strategy="afterInteractive" type="text/javascript" />
        </html>
    );
}
