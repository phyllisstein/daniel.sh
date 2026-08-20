import {
    ActUpLink,
    BauerLink,
    Hero,
    Main,
    Name,
    Section,
    SectionTitle,
    Tagline,
    VoxLink,
} from "./page-styles";

export default function Home () {
    return (
        <Main>
            <Section>
                <Hero>
                    <Tagline>
                        I’m a full-stack engineer, software architect, and tech lead. I've helped
                        thirteen years of writers, publishers, and activists find richness in unruly
                        domains. I've built editorial design tools, data reconciliation infrastructure,
                        revenue apparatus, and enterprise-scale system design—for the
                        { " " }
                        <VoxLink>yellow one</VoxLink>
                        , the
                        { " " }
                        <BauerLink>blue one</BauerLink>
                        , and the
                        { " " }
                        <ActUpLink>pink one</ActUpLink>
                        .
                    </Tagline>
                    <Name>Call me Daniel.</Name>
                </Hero>
            </Section>
        </Main>
    );
}
