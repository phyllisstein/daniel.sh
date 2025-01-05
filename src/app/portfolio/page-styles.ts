import styled from "styled-components";


export const PortfolioPageContainer = styled.section`
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr;
    min-height: 100vh;
`;


export const StepBlock = styled.figure`
    display: flex;
    flex-direction: column;
    grid-row: 2 / 3;
    grid-column: 1 / -1;
    gap: 1rem;
    margin: 0;
    padding: 1rem;
`;


export const Identifier = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
`;


export const Year = styled.div`
    color: #000;
    font-weight: 600;
    font-size: clamp(1rem, 5vw, 5rem);
    font-family: "Futura PT", sans-serif;
    text-align: right;
`;


export const Header = styled.header`
    display: flex;
    flex-direction: column;
    grid-column: 1 / -1;
    gap: 1rem;
    max-height: 25%;
    padding: 1rem;
`;


export const Title = styled.h2`
    color: #FFF;
    font-weight: 600;
    letter-spacing: 3px;
    text-align: center;

    background-color: #000;

    font-variant-caps: all-small-caps;

    ${ ({ theme }) => theme.typeface.futura({ fontSize: 10, leadingBottom: 0, leadingTop: 0, lineHeight: 10 }) }
`;


export const Tagline = styled.h3`
    font-weight: 500;
    font-family: "Future PT Cond", sans-serif;
    text-align: center;

    font-variant-caps: all-small-caps;

    ${ ({ theme }) => theme.typeface.futura() }
`;


export const Wordmark = styled.div`
    display: flex;
    flex: 50% 0 1;
    align-items: center;
    justify-content: flex-start;

    svg {
        width: auto;
        height: 100%;
        max-height: 8rem;
    }
`;
