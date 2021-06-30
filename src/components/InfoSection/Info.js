import React from 'react';
import { SiteButton } from '../ButtonElement';
import {
    Column2,
    Img,
    ImgWrap,
    InfoContainer,
    InfoWrapper,
    InfoRow,
    Column1,
    TextWrapper,
    TopLine,
    Heading,
    SubTitle,
    BtnWrap,
    ExternalLink
} from './InfoElements';

const InfoSection = ({
    id,
    lightBg,
    lightText,
    lightTextDesc,
    topLine,
    headLine,
    description,
    buttonLabel,
    imgStart,
    img,
    alt,
    dark,
    dark2,
    primary,
    darkText,
    buttonEnable,
    localButton,
    buttonPath
}) => {
    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headLine}</Heading>
                                <SubTitle darkText={darkText}>{description}</SubTitle>
                                <BtnWrap buttonEnable={buttonEnable}>
                                    {localButton ? 
                                    <SiteButton
                                    to={buttonPath}
                                    primary={primary ? 1 : 0}
                                    dark={dark ? 1: 0}
                                >{buttonLabel}</SiteButton> : 
                                    <ExternalLink
                                        href={buttonPath}
                                        target='_blank'
                                        primary={primary ? 1 : 0}
                                        dark={dark ? 1: 0}
                                    >{buttonLabel}</ExternalLink>}
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={img} alt={alt} />
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default InfoSection
