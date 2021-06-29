import styled from 'styled-components';
import { Style } from './../Variables/StyleVariables';

export const MultiInfoContainer = styled.div`
    min-height: 860px;
    padding: 30px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: ${({lightBg}) => (lightBg ? Style.lightColor : Style.darkColor)};
`

export const MultiInfoWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 1rem;
    padding: 0 50px;

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`

export const MultiInfoCard = styled.div`
    background: ${({lightBg}) => (lightBg ? Style.darkColor : Style.lightColor)};
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    max-height: 340px;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`

export const MultiInfoIcon = styled.img`
    height: 160px;
    width: 160px;
    margin-bottom: 10px;
`

export const MultiInfoH1 = styled.h1`
    margin-bottom: 24px;
    font-size: 48px;
    line-height: 1.1;
    font-weight: 600;
    color: ${Style.mainColor};
    text-align: center;

    @media screen and (max-width: 540px) {
        font-size: 30px;
    }
`

export const MultiInfoH2 = styled.h2`
    color: ${({cardTextDark}) => (cardTextDark ? Style.darkColor : Style.lightColor)};
    font-size: 1rem;
    margin-bottom: 10px;
`

export const MultiInfoP = styled.p`
    color: ${({cardTextDark}) => (cardTextDark ? Style.darkColor : Style.lightColor)};
    font-size: 1rem;
    text-align: center;
`