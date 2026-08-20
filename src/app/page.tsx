import { Main, Name, Section, Hero, Tagline } from "./page-styles";

export default function Home () {
    return (
        <Main>
            <Section>
                <Hero>
                    <Tagline>
                        I’m a full-stack engineer, software architect, and tech lead. I've helped
                        thirteen years of writers, publishers, and activists find richness in unruly
                        domains. I've built editorial design tools, data reconciliation infrastructure,
                        revenue apparatus, and enterprise-scale system design—at the yellow one, the
                        blue one, and the pink one.
                    </Tagline>
                    <Name>Call me Daniel.</Name>
                </Hero>
            </Section>
        </Main>
    );
}
