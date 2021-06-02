import styled from 'styled-components';
import {Link} from 'react-router-dom';
import { Style } from './../Variables/StyleVariables';

export const FooterContainer = styled.footer`
    background-color: ${Style.darkColor};
`

export const FooterWrapper = styled.div`
    padding: 48px 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1100px;
    margin: 0 auto;
`

export const FooterLinksContainer = styled.div`
    display: flex;
    justify-content: center;

    @media screen and (max-width: 820px) {
        padding-top: 32px;
    }
`

export const FooterLinksWrapper = styled.div`
    display: flex;

    @media screen and (max-width: 820px) {
        flex-direction: column;
    }
`

export const FooterItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1rem;
    text-align: left;
    width: 160px;
    box-sizing: border-box;
    color: ${Style.lightColor};

    @media screen and (max-width: 420px) {
        margin: 0;
        padding: 10px;
        width: 100%;
    }
`

export const FooterItemTitle = styled.h1`
    font-size: 14px;
    margin-bottom: 1rem;
`

export const FooterLink = styled(Link)`
    color: ${Style.lightColor};
    text-decoration: none;
    margin-bottom: 0.5rem;
    font-size: 14px;

    &:hover {
        color: ${Style.mainColor};
        transition: 0.3s ease-out;
    }
`

export const FooterMedia = styled.section`
    max-width: 1000px;
    width: 100%;
`

export const FooterMediaWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1100px;
    margin: 40px auto 0 auto;

    @media screen and (max-width: 820px) {
        flex-direction: column;
    }
`

export const MediaLogo = styled(Link)`
    color: ${Style.lightColor};
    justify-self: start;
    cursor: pointer;
    text-decoration: none;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    font-weight: bold;
`

export const MediaRights = styled.small`
    color: ${Style.lightColor};
    margin-bottom: 1rem;
`

export const MediaSocialIcons = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const SocialIcons = styled.a`
    color: ${Style.lightColor};
    font-size: 24px;
    margin: 0 5px;

    &:hover {
        color: ${Style.mainColor};
    }
`