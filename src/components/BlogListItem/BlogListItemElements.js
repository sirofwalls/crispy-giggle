import styled from 'styled-components';
import { Style } from '../Variables/StyleVariables';
import {FaEdit,FaTrash} from 'react-icons/fa';


export const BlogItemWrapper = styled.div`
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

export const BlogTextWrapper = styled.div`
    min-width: 100%;
    padding-top: 0;
    display: flex;
    flex-direction: column;
`

export const BlogHeading = styled.h2`
    margin-bottom: 24px;
    font-size: 32px;
    line-height: 1.1;
    font-weight: 600;
    align-self: center;
    color: ${Style.darkColor};

    @media screen and (max-width: 768px) {
        font-size: 1.7rem;
    }
`

export const BlogPartialText = styled.p`
    max-width: 1000px;
    margin-bottom: 35px;
    font-size: 1.2rem;
    line-height: 24px;
    color: ${Style.darkColor};

    @media screen and (max-width: 768px) {
        font-size: 1rem;
    }
`
export const BtnWrap = styled.div`
    display: flex;
    justify-content: flex-start;
`

export const BtnEditContainer = styled.div`
display: flex;
margin-left: auto;
font-size: 2rem;
`

export const BtnEdit = styled(FaEdit)`
color: green;
align-self: center;
margin-right: 1rem;
padding: 5px;
cursor: pointer;

&:hover {
    background-color: ${Style.mainColor};
    border-radius: 10px;
    color: ${Style.lightColor};
}
`
export const Btntrash = styled(FaTrash)`
color: red;
align-self: center;
margin-right: 1rem;
padding: 5px;
transition: 0.3ms all ease-in-out;
 cursor: pointer;

&:hover {
    background-color: ${Style.mainColor};
    border-radius: 10px;
    color: ${Style.lightColor};
}
`