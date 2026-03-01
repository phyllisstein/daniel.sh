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
import { ActionButtonIcon } from "components/icon";


export default function Home() {
    return (
        <Main>
            <Section>
                <Tagline>
                    I’m a full-stack engineer and architect who brings
                    craftsmanship and an editorial eye to ambitious
                    software projects.
                </Tagline>
                <Name>
                    You can call me Daniel.
                </Name>
                <div className=" spectrum-ActionGroup spectrum-ActionGroup--sizeM ">


                    <button aria-controls="" aria-pressed="false" className="spectrum-ActionButton spectrum-ActionButton--sizeM spectrum-ActionGroup-item " data-testid="actionbutton-yd682" id="actionbutton-yd682" role="button">

                        <svg aria-hidden="true" aria-labelledby="Edit" className=" spectrum-Icon spectrum-Icon--sizeM spectrum-ActionButton-icon " focusable="false" id="icon-5ebph" role="img">
                            <title id="Edit">Edit</title>
                            <use href="#spectrum-icon-18-Edit" xlinkHref="#spectrum-icon-18-Edit"></use>
                        </svg>
                        <span className="spectrum-ActionButton-label">Edit</span>
                    </button>

                    <button aria-controls="" aria-pressed="false" className=" spectrum-ActionButton spectrum-ActionButton--sizeM spectrum-ActionGroup-item " data-testid="actionbutton-pwrzc" id="actionbutton-pwrzc" role="button">

                        <svg aria-hidden="true" aria-labelledby="Copy" className=" spectrum-Icon spectrum-Icon--sizeM spectrum-ActionButton-icon " focusable="false" id="icon-vz8ho" role="img">
                            <title id="Copy">Copy</title>
                            <use href="#spectrum-icon-18-Copy" xlinkHref="#spectrum-icon-18-Copy"></use>
                        </svg>
                        <span className="spectrum-ActionButton-label">Copy</span>
                    </button>

                    <button aria-controls="" aria-pressed="true" className=" spectrum-ActionButton spectrum-ActionButton--sizeM is-selected spectrum-ActionGroup-item " data-testid="actionbutton-5b5i4" id="actionbutton-5b5i4" role="button">

                        <svg aria-hidden="true" aria-labelledby="Delete" className=" spectrum-Icon spectrum-Icon--sizeM spectrum-ActionButton-icon " focusable="false" id="icon-sw0p8" role="img">
                            <title id="Delete">Delete</title>
                            <use href="#spectrum-icon-18-Delete" xlinkHref="#spectrum-icon-18-Delete"></use>
                        </svg>
                        <span className="spectrum-ActionButton-label">Delete</span>
                    </button>

                </div>
                <ButtonBar>
                    <div className="spectrum-ActionGroup spectrum-ActionGroup--sizeM spectrum-ActionGroup--compact">
                        <a className="spectrum-ActionButton spectrum-ActionButton--sizeM spectrum-ActionGroup-item" href="mailto:daniel@daniel.sh">
                            <ActionButtonIcon label="Email me">
                                <PaperPlane />
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
