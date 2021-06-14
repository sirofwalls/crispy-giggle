import styled from 'styled-components';
import { Style } from '../../Variables/StyleVariables';

export const InputLabel = styled.label`
    color: ${Style.darkColor};
    font-size: 1rem;
    margin: 25px;
    text-align: center;
`

export const InputInput = styled.input`
    border-radius: 15px;
    text-align: center;
    font-size: 1.5rem;
    border: 1px solid ${Style.darkColor};

    &:focus{
        outline: none
    }
`

export const ErrorMessage = styled.p`
    font-size: 0.8rem;
    text-align: center;
    color: tomato;
`