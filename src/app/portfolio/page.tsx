"use client";


import {
    PortfolioPageContainer,
    Header,
    Identifier,
    Wordmark,
    ID,
    Title,
    Tagline,
} from "./page-styles";
import WordmarkText from "./mccalls/wordmark.svg";


export default function PortfolioPage() {
    return (
        <PortfolioPageContainer>
            <Header>
                <Identifier>
                    <Wordmark>
                        <WordmarkText style={{ stroke: "#000" }} />
                    </Wordmark>
                    <ID>1234</ID>
                </Identifier>
                <Title>
                    Easy Architecture Guide
                </Title>
                <Tagline>
                    I Grate, You Grate, We All Grate to Migrate
                </Tagline>
                <div>
                    TK: Illustration
                </div>
            </Header>
        </PortfolioPageContainer>
    );
}
