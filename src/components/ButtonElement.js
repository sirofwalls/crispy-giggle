import styled from 'styled-components';
import {Link as LinkS} from 'react-scroll';
import {Link as LinkR} from 'react-router-dom';
import { Style } from './Variables/StyleVariables';


export const Button = styled(LinkS)`
    border-radius: 50px;
    background: ${({primary})=> (primary ? Style.mainColor : Style.darkColor )};
    white-space: nowrap;
    padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
    color: ${({dark}) => (dark ? Style.darkColor : Style.lightColor)};
    font-size: ${({big}) => (big ? '20px' : '16px')};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover{
        transition: all 0.2s ease-in-out;
        background: ${({primary})=> (primary ? Style.lightColor : Style.mainColor)};
    }
`

export const ExternalButton = styled(LinkR)`
    border-radius: 50px;
    background: ${({primary})=> (primary ? Style.mainColor : Style.darkColor )};
    white-space: nowrap;
    padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
    color: ${({dark}) => (dark ? Style.darkColor : Style.lightColor)};
    font-size: ${({big}) => (big ? '20px' : '16px')};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover{
        transition: all 0.2s ease-in-out;
        background: ${({primary})=> (primary ? Style.lightColor : Style.mainColor)};
    }
`