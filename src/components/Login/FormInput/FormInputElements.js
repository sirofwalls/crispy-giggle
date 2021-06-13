import styled from 'styled-components';
import { Style } from '../../Variables/StyleVariables';

export const InputInput = styled.label`
    color: ${Style.darkColor};
    font-size: 1.5rem;
    margin: 25px;
    text-align: center;
`

export const InputLabel = styled.input`
    border-radius: 15px;
    text-align: center;
    font-size: 1rem;
    border: 1px solid ${Style.darkColor};

    &:focus{
        outline: none
    }
`