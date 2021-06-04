import styled from 'styled-components';
import { Style } from '../Variables/StyleVariables';

export const BlogListContainer = styled.div`
    background: ${Style.darkColor};
    padding-top: 100px;

    display: flex;
    align-items: center;
    min-height: calc(100vh - 80px);
    flex-direction: column;

    @media screen and (max-width: 768px) {
        padding: 100px 0;
    }
`

export const BlogListWrapper = styled.div`
    display: grid;
    z-index: 1;
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

export const BlogListHeading = styled.h1`
display: flex;
justify-content: center;
align-content: center;
margin-top: 30px;
margin-bottom: 40px;
font-size: 2.5rem;
width: 100%;
background-color: ${Style.lightColor};
`