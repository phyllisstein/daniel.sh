import "@spectrum-css/actionbutton";
import "@spectrum-css/actiongroup";
import "@spectrum-css/button";
import "@spectrum-css/tokens/dist/index.css";
import "@spectrum-css/vars/dist/spectrum-light.css";
import "@spectrum-css/vars/dist/spectrum-global.css";
import "@spectrum-css/vars/dist/spectrum-large.css";

import type { ReactNode } from "react";
import Script from "next/script";
import type { Metadata } from "next";

import { Body, Preflight, StyledComponentsRegistry } from "styles/global";
import { Charlie, MaisonNeue } from "styles/fonts";

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <html className="spectrum spectrum--large spectrum--light" lang="en-us">
            <body>
                <StyledComponentsRegistry>
                    <Preflight />
                    <Body />

                    <Charlie />
                    <MaisonNeue />

                    { children }
                </StyledComponentsRegistry>
            </body>
            <Script src="/hyphenopoly.js" type="text/javascript" />
        </html>
    );
}
