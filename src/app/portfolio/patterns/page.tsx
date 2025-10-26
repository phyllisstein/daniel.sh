import BrowserLight from "assets/browser-light.svg";
import BrowserDark from "assets/browser-dark.svg";
import TerminalBackground from "assets/terminal.svg";
import { PageContainer, PatternContainer, PatternTitle } from "./page-styles";
import { DemoBrowser, DemoTerminal } from "components/demo";


export default function PatternsPage() {
    return (
        <PageContainer>
            { /* FIXME: Subtler gradients for browsers and terminal */ }
            <DemoBrowser dark={ false }>
                Code code code
            </DemoBrowser>
            <DemoBrowser dark={ true }>
                Code code code
            </DemoBrowser>
            <DemoTerminal>
                Code code code
            </DemoTerminal>
            <PatternContainer>
                <PatternTitle>Name &amp; Mascot</PatternTitle>
                <p>
                    What a fun, sexy time for you. I will be a bigger and
                    hairier mole than the one on your inner left thigh!
                </p>
                <p>
                    Coo coo ca chaw. Coo coo ca chaw. Coo coo ca chaw.
                    I [bleeped] the business model. Yeah, she had all kinds of
                    orgasms. Well, I hope you also carry a spare bowl of candy
                    beans.
                </p>
                <p>
                    Buster, what are you doing with mother’s rape horn? I’m
                    sure Egg is a great person. Coo coo ca chaw. Coo coo cachaw.
                    It just seems like there’s still light coming in from under
                    the door. I think I might have someone who’s going to
                    circumvrent the law. I’m gonna go get sexy.
                </p>
            </PatternContainer>
            <PatternContainer>
                <PatternTitle>
                    5 Reasons Drinking Milk On The
                    Toilet Is Kind Of A Game Changer
                </PatternTitle>
                <p>
                    I hate the Wetlands. They’re stupid and wet, and there are
                    bugs everywhere, and I think I maced a crane. You’re Killing
                    Me, Buster. How about a turtle? I’ve always loved those
                    leathery little snappy faces.
                </p>
                <p>
                    Nellie is blowing them all AWAY. NO TOUCHING! I’m gonna build
                    me an airport, put my name on it. Why, Michael? So you can
                    fly away from your feelings? Coo coo ca chaw. Coo coo ca chaw.
                    If you’re suggesting I play favorites, you’re wrong. I love
                    all of my children equally. [earlier] I don’t care for Gob.
                    Hair up, glasses off.
                </p>
                <p>
                    Okay, Lindsay, are you forgetting that I was a professional
                    twice over—an analyst and a therapist. The world’s first
                    analrapist. She’s not that Mexican, Mom. She’s my Mexican.
                    And she’s Columbian or something. You just grab that brownish
                    area by its points and you don’t let go no matter what your
                    mother tells you!
                </p>
            </PatternContainer>
        </PageContainer>
    );
}
