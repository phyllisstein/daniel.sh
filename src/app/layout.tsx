import "@spectrum-css/tokens";
import "@spectrum-css/actionbutton";

import type { ReactNode } from "react";
import type { Metadata } from "next";

import { Body, Preflight, StyledComponentsRegistry } from "styles/global";
import { Charlie, MaisonNeue, PragmataPro, MaisonNeueExtended } from "styles/fonts";

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
                    <Preflight />
                    <Body />

                    <Charlie />
                    <MaisonNeue />
                    <PragmataPro />
                    <MaisonNeueExtended />

                    { children }
                </StyledComponentsRegistry>
            </body>
        </html>
    );
}
