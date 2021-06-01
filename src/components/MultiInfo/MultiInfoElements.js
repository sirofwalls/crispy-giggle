import styled from 'styled-components';

const color = 'rgba(96, 168, 229, 1)';
const blackColor = 'rgba(1, 6, 6, 1)';
const lightColor = 'rgba(242, 249, 255, 1)';

export const MultiInfoContainer = styled.div`
    height: 800px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: ${({lightBg}) => (lightBg ? lightColor : blackColor)};

    @media screen and (max-width: 768px) {
        height: 1100px;
    }

    @media screen and (max-width: 480px) {
        height: 1300px;
    }
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
    background: ${({lightBg}) => (lightBg ? blackColor : lightColor)};
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
    font-size: 2.5rem;
    /* color: ${({cardTitleDark}) => (cardTitleDark ? blackColor : lightColor)}; */
    color: ${color};
    margin-bottom: 64px;

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`

export const MultiInfoH2 = styled.h2`
    color: ${({cardTextDark}) => (cardTextDark ? blackColor : lightColor)};
    font-size: 1rem;
    margin-bottom: 10px;
`

export const MultiInfoP = styled.p`
    color: ${({cardTextDark}) => (cardTextDark ? blackColor : lightColor)};
    font-size: 1rem;
    text-align: center;
`