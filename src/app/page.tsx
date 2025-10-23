"use client";

import {
    ButtonBar,
    Graf,
    Main,
    Name,
    Section,
    SectionTitle,
    Tagline,
    TextContainer,
} from "./page-styles";
import PaperPlane from "assets/icons/paper-plane.svg";
import Bluesky from "assets/icons/bluesky.svg";
import LinkedIn from "assets/icons/linkedin.svg";
import MapIcon from "assets/icons/map.fill.svg";
import { ActionButtonIcon } from "components/icon";
import styled from "styled-components";


const Pre = styled.pre`
    position: relative;
    padding: 4rem;

    & code {
        /* position: relative; */

        display: block;
        line-height: 1.1;
    }
`;

const Icon = styled.span`
    position: absolute;
    top: 50%;

    display: inline-block;

    font-size: 200%;
    line-height: 1;
    vertical-align: middle;

    transform: translateY(-50%);
`;

const HugeLabel = styled.pre`
    position: absolute;
    top: 50%;
    left: 50%;

    display: inline-block;

    font-size: 50%;
    line-height: 1;
    white-space: pre;
    vertical-align: middle;

    transform: translate(-50%, -50%);
`;

const PaywallLabel = (
    <>
        <HugeLabel>
            <code>__/\\\\\\\\\\\\\__________________________________________________________________/\\\\\\_____/\\\\\\____        </code>
            <code> _\/\\\/////////\\\_______________________________________________________________\////\\\____\////\\\____       </code>
            <code>  _\/\\\_______\/\\\___________________/\\\__/\\\_____________________________________\/\\\_______\/\\\____      </code>
            <code>   _\/\\\\\\\\\\\\\/___/\\\\\\\\\______\//\\\/\\\___/\\____/\\___/\\__/\\\\\\\\\_______\/\\\_______\/\\\____     </code>
            <code>    _\/\\\/////////____\////////\\\______\//\\\\\___\/\\\__/\\\\_/\\\_\////////\\\______\/\\\_______\/\\\____    </code>
            <code>     _\/\\\_______________/\\\\\\\\\\______\//\\\____\//\\\/\\\\\/\\\____/\\\\\\\\\\_____\/\\\_______\/\\\____   </code>
            <code>      _\/\\\______________/\\\/////\\\___/\\_/\\\______\//\\\\\/\\\\\____/\\\/////\\\_____\/\\\_______\/\\\____  </code>
            <code>       _\/\\\_____________\//\\\\\\\\/\\_\//\\\\/________\//\\\\//\\\____\//\\\\\\\\/\\__/\\\\\\\\\__/\\\\\\\\\_ </code>
            <code>        _\///_______________\////////\//___\////___________\///__\///______\////////\//__\/////////__\/////////__</code>
        </HugeLabel>
    </>
);

const DIAGRAM = (
    <>
        <code>                                ⎧</code>
        <code>                     􀔆  􀍲───────⎨  <Icon>󰙐</Icon></code>
        <code>􀓧─────────────────────􀔁􀍰        ⎩</code>
        <code>│                      􀍳</code>
        <code>│      { PaywallLabel }                │</code>
        <code>│                      │</code>
        <code>│                      │</code>
        <code>│                      │</code>
        <code>│                      │</code>
        <code>│                      │</code>
        <code>│                      │</code>
        <code>│                      │</code>
        <code>│                      │</code>
        <code>􀓩──────────────────────􀓪</code>
    </>
);

export default function Home() {
    return (
        <Main>
            <Section>
                <Tagline>
                    I’m a full-stack engineer and software architect. I bring
                    craftsmanship and an editorial eye to ambitious
                    software projects.
                </Tagline>
                <Name>
                    You can call me Daniel.
                </Name>
                <ButtonBar>
                    <div className="spectrum-ActionGroup spectrum-ActionGroup--sizeM">
                        <a className="spectrum-ActionButton spectrum-ActionButton--sizeM spectrum-ActionGroup-item" href="mailto:daniel@daniel.sh">
                            <ActionButtonIcon label="Email me">
                                <MapIcon className="spectrum-Icon spectrum-Icon--sizeM spectrum-ActionButton-icon" />
                            </ActionButtonIcon>
                        </a>
                        <a className="spectrum-ActionButton spectrum-ActionButton--sizeM spectrum-ActionGroup-item" href="https://twitter.com/phyllisstein">
                            <ActionButtonIcon label="Connect with me on LinkedIn">
                                <LinkedIn />
                            </ActionButtonIcon>
                        </a>
                        <a className="spectrum-ActionButton spectrum-ActionButton--sizeM spectrum-ActionGroup-item" href="https://linkedin.com/in/danielsh1">
                            <ActionButtonIcon label="Follow me on BLuesky">
                                <Bluesky />
                            </ActionButtonIcon>
                        </a>
                    </div>
                </ButtonBar>
            </Section>
            <Section>
                <SectionTitle>About Me</SectionTitle>
                <Pre>
                    { DIAGRAM }
                </Pre>
            </Section>
        </Main>
    );
}
