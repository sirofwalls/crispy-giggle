import React from 'react';

import {
    MultiInfoContainer,
    MultiInfoH1,
    MultiInfoWrapper,
    MultiInfoCard,
    MultiInfoIcon,
    MultiInfoH2,
    MultiInfoP
} from './MultiInfoElements';

const MultiInfo = ({
    id,
    multiInfoH1,
    card1Title,
    card2Title,
    card3Title,
    card1Text,
    card2Text,
    card3Text,
    lightBg,
    cardTitleDark,
    cardTextDark,
    img1,
    img2,
    img3,
    alt1,
    alt2,
    alt3,
}) => {
    return (
        <MultiInfoContainer lightBg={lightBg} id={id}>
            <MultiInfoH1 cardTitleDark={cardTitleDark}>{multiInfoH1}</MultiInfoH1>
            <MultiInfoWrapper>
                <MultiInfoCard lightBg={lightBg}>
                    <MultiInfoIcon src={img1} alt={alt1} />
                    <MultiInfoH2 cardTextDark={cardTextDark}>{card1Title}</MultiInfoH2>
                    <MultiInfoP cardTextDark={cardTextDark}>{card1Text}</MultiInfoP>
                </MultiInfoCard>
                <MultiInfoCard lightBg={lightBg}>
                    <MultiInfoIcon src={img2} alt={alt2} />
                    <MultiInfoH2 cardTextDark={cardTextDark}>{card2Title}</MultiInfoH2>
                    <MultiInfoP cardTextDark={cardTextDark}>{card2Text}</MultiInfoP>
                </MultiInfoCard>
                <MultiInfoCard lightBg={lightBg}>
                    <MultiInfoIcon src={img3} alt={alt3} />
                    <MultiInfoH2 cardTextDark={cardTextDark}>{card3Title}</MultiInfoH2>
                    <MultiInfoP cardTextDark={cardTextDark}>{card3Text}</MultiInfoP>
                </MultiInfoCard>
            </MultiInfoWrapper>
        </MultiInfoContainer>
    )
}

export default MultiInfo
