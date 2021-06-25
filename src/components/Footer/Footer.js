import React from 'react';
import {animateScroll as scroll} from 'react-scroll';

import {
    FooterContainer,
    FooterWrapper,
    FooterMedia,
    FooterMediaWrapper,
    MediaLogo,
    MediaRights,
    MediaSocialIcons,
    SocialIcons
} from './FooterElements';

import {FaGithub} from 'react-icons/fa';

const Footer = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <FooterContainer>
            <FooterWrapper>
                <FooterMedia>
                    <FooterMediaWrapper>
                        <MediaLogo to='/'onClick={toggleHome}>PTRWLSR</MediaLogo>
                        <MediaRights>ptrwlsr.com © {new Date().getFullYear()}</MediaRights>
                        <MediaSocialIcons>
                            <SocialIcons href="https://github.com/sirofwalls" target="_blank" aria-label="Github"><FaGithub /></SocialIcons>
                        </MediaSocialIcons>
                    </FooterMediaWrapper>
                </FooterMedia>
            </FooterWrapper>
        </FooterContainer>
    )
}

export default Footer
