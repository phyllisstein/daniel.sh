import "@spectrum-css/actionbutton";
import "@spectrum-css/actiongroup";
import "@spectrum-css/button";
import "@spectrum-css/tokens/dist/index.css";
import "@spectrum-css/vars/dist/spectrum-dark.css";
import "@spectrum-css/vars/dist/spectrum-global.css";
import "@spectrum-css/vars/dist/spectrum-medium.css";

import type { ReactNode } from "react";
import Script from "next/script";
import type { Metadata } from "next";

import { Body, Preflight, StyledComponentsRegistry } from "styles/global";
import { Charlie, MaisonNeue } from "styles/fonts";


export const metadata: Metadata = {
    title: {
        default: "Software Engineer and Architect | Daniel P. Shannon",
        template: "%s | Daniel P. Shannon",
    },
};


export default function Layout({ children }: { children: ReactNode }) {
    return (
        <html lang="en-us">
            <body className="spectrum spectrum--medium spectrum--dark">
                <StyledComponentsRegistry>
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
