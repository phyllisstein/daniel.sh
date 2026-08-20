import { ButtonBar, Main, Name, Section, SectionTitle, Tagline } from "./page-styles";

export default function Home () {
    return (
        <Main>
            <Section>
                <Tagline>
                    I’m a full-stack engineer and architect who brings craftsmanship and an editorial eye to
                    ambitious software projects.
                </Tagline>
                <Name>You can call me Daniel.</Name>
            </Section>
            <Section>
                <SectionTitle>About Me</SectionTitle>
            </Section>
        </Main>
    );
}
