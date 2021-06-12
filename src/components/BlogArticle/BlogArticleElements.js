import styled from 'styled-components';
import { Style } from '../Variables/StyleVariables';

export const BlogArticleContainer = styled.div`
    background: ${Style.darkColor};
    padding-top: 100px;

    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    min-height: calc(100vh - 80px);
    flex-direction: column;

    @media screen and (max-width: 768px) {
        padding: 100px 0;
    }
`

export const BlogArticleWrapper = styled.div`
    display: grid;
    z-index: 1;
    width: 100%;
    max-width: 1100px;
    justify-content: center;
    margin-bottom: 15px;
    border-radius: 15px;
    background: ${Style.lightColor};
    padding: 20px 25px;
    margin-left: 20px;
    margin-right: 20px;
    border: 3px solid ${Style.darkColor};
`

export const BlogArticleHeading = styled.h1`
    margin: 24px 0;
    font-size: 2rem;
    line-height: 1.1;
    font-weight: 600;
    align-self: center;
    color: ${Style.darkColor};

    @media screen and (max-width: 768px) {
        font-size: 1.7rem;
    }
`

export const BlogArticleText = styled.div`
    max-width: 1000px;
    margin-bottom: 35px;
    font-size: 1.2rem;
    line-height: 24px;
    color: ${Style.darkColor};

    @media screen and (max-width: 768px) {
        font-size: 1rem;
    }

    & > p{
        margin: 1rem 0;
    }
`