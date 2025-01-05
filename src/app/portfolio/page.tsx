"use client";


import {
    Header,
    Identifier,
    PortfolioPageContainer,
    Tagline,
    Title,
    Wordmark,
    Year,
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
                    <Year>2022</Year>
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
