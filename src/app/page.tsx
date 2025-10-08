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
            </Section>
        </Main>
    );
}
