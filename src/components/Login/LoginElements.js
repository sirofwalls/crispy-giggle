import styled from 'styled-components';
import { Style } from '../Variables/StyleVariables';

export const LoginContainser = styled.div`
    background: ${Style.darkColor};
    padding-top: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: calc(100vh - 80px);

    @media screen and (max-width: 768px) {
        padding: 100px 0;
    }
`

export const FormContainer = styled.form`
    background-color: ${Style.lightColor};
    padding:100px;
    display: flex;
    flex-direction: column;
`

export const FormTitle = styled.h1`
    color: ${Style.darkColor};
    padding-bottom: 20px;
    text-align: center;
    font-size: 3rem;
`

export const FormButton = styled.button`
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
    margin-top: 3rem;

    &:hover{
        transition: all 0.2s ease-in-out;
        background: ${Style.mainColor};
    }
`

export const ErrorMessage = styled.p`
    color: tomato;
    text-align: center;
`

export const VictoryMessage = styled.p`
    color: green;
    text-align: center;
`