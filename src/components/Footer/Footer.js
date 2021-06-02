import React from 'react';

import {
    FooterContainer,
    FooterWrapper,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterItem,
    FooterItemTitle,
    FooterLink,
    FooterMedia,
    FooterMediaWrapper,
    MediaLogo,
    MediaRights,
    MediaSocialIcons,
    SocialIcons
} from './FooterElements';

import {FaFacebook, FaInstagram, FaYoutube, FaGithub} from 'react-icons/fa';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrapper>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterItem>
                            <FooterItemTitle>Place Holder 1</FooterItemTitle>
                            <FooterLink to='/signin'>Link 1</FooterLink>
                            <FooterLink to='/signin'>Link 2</FooterLink>
                            <FooterLink to='/signin'>Link 3</FooterLink>
                            <FooterLink to='/signin'>Link 4</FooterLink>
                            <FooterLink to='/signin'>Link 5</FooterLink>
                        </FooterItem>
                        <FooterItem>
                            <FooterItemTitle>Place Holder 2</FooterItemTitle>
                            <FooterLink to='/signin'>Link 1</FooterLink>
                            <FooterLink to='/signin'>Link 2</FooterLink>
                            <FooterLink to='/signin'>Link 3</FooterLink>
                            <FooterLink to='/signin'>Link 4</FooterLink>
                            <FooterLink to='/signin'>Link 5</FooterLink>
                        </FooterItem>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterItem>
                            <FooterItemTitle>Place Holder 3</FooterItemTitle>
                            <FooterLink to='/signin'>Link 1</FooterLink>
                            <FooterLink to='/signin'>Link 2</FooterLink>
                            <FooterLink to='/signin'>Link 3</FooterLink>
                            <FooterLink to='/signin'>Link 4</FooterLink>
                            <FooterLink to='/signin'>Link 5</FooterLink>
                        </FooterItem>
                        <FooterItem>
                            <FooterItemTitle>Place Holder 4</FooterItemTitle>
                            <FooterLink to='/signin'>Link 1</FooterLink>
                            <FooterLink to='/signin'>Link 2</FooterLink>
                            <FooterLink to='/signin'>Link 3</FooterLink>
                            <FooterLink to='/signin'>Link 4</FooterLink>
                            <FooterLink to='/signin'>Link 5</FooterLink>
                        </FooterItem>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <FooterMedia>
                    <FooterMediaWrapper>
                        <MediaLogo to='/'>PTRWLSR</MediaLogo>
                        <MediaRights>ptrwlsr.com © {new Date().getFullYear()}</MediaRights>
                        <MediaSocialIcons>
                            <SocialIcons href="/" target="_blank" aria-label="Facebook"><FaFacebook /></SocialIcons>
                            <SocialIcons href="/" target="_blank" aria-label="Instagram"><FaInstagram /></SocialIcons>
                            <SocialIcons href="/" target="_blank" aria-label="Youtube"><FaYoutube /></SocialIcons>
                            <SocialIcons href="/" target="_blank" aria-label="Github"><FaGithub /></SocialIcons>
                        </MediaSocialIcons>
                    </FooterMediaWrapper>
                </FooterMedia>
            </FooterWrapper>
        </FooterContainer>
    )
}

export default Footer
