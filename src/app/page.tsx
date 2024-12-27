import { faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/sharp-solid-svg-icons";

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

export default function Home() {
    return (
        <Main>
            <Section>
                <Tagline>
                    I’m a full-stack engineer and architect who brings insight and craftsmanship
                    to ambitious software projects.
                </Tagline>
                <Name>
                    You can call me Daniel.
                </Name>
                <ButtonBar className="spectrum-QuickActions-overlay">
                    <div className="spectrum-ActionGroup spectrum-ActionGroup--sizeM">
                        <a className="spectrum-ActionButton spectrum-ActionButton--sizeXL spectrum-ActionButton--quiet spectrum-ActionGroup-item" href="mailto:daniel@daniel.sh">
                            <FontAwesomeIcon fixedWidth className="spectrum-Icon spectrum-Icon--sizeM spectrum-ActionButton-icon" icon={ faPaperPlane } />
                        </a>
                        <a className="spectrum-ActionButton spectrum-ActionButton--sizeXL spectrum-ActionButton--quiet spectrum-ActionGroup-item" href="https://twitter.com/phyllisstein">
                            <FontAwesomeIcon fixedWidth className="spectrum-Icon spectrum-Icon--sizeM spectrum-ActionButton-icon" icon={ faTwitter } />
                        </a>
                        <a className="spectrum-ActionButton spectrum-ActionButton--sizeXL spectrum-ActionButton--quiet spectrum-ActionGroup-item" href="https://linkedin.com/in/danielsh1">
                            <FontAwesomeIcon fixedWidth className="spectrum-Icon spectrum-Icon--sizeM spectrum-ActionButton-icon" icon={ faLinkedinIn } />
                        </a>
                    </div>
                </ButtonBar>
            </Section>
        </Main>
    );
}
