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
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 1;
    width:100%;
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

export const ListHeadingWrapper = styled.div`
    margin-top: 30px;
    margin-bottom: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
`

export const CategorySelect = styled.select`
    justify-self: center;
    height: 3rem;
    font-size: 1.5rem;
    text-align: center;
    border-radius: 15px;
    background-color: ${Style.darkColor};
    color: ${Style.lightColor};
    padding: 0 50px;
    text-transform: capitalize;
`

export const CategoryOption = styled.option`
    text-transform: capitalize;
    text-align: center;
    width: 100%;
`

export const BlogListHeading = styled.h1`
    display: flex;
    justify-content: center;
    align-content: center;
    font-size: 2.5rem;
    margin-bottom: 20px;
    text-align: center;
    background-color: ${Style.lightColor};
`

export const BlogEditButton = styled.button`
    border-radius: 50px;
    background: ${Style.darkColor};
    white-space: nowrap;
    padding: 12px 30px;
    color: ${Style.lightColor};
    font-size: 1.2rem;
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    margin: 3rem 0;

    &:hover{
        transition: all 0.2s ease-in-out;
        background: ${Style.mainColor};
    }
`