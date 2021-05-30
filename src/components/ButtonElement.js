import styled from 'styled-components';
import {Link} from 'react-scroll';

const color = 'rgba(96, 168, 229, 1)';
const blackColor = 'rgba(1, 6, 6, 1)';


export const Button = styled(Link)`
    border-radius: 50px;
    background: ${({primary})=> (primary ? `${color}`: `${blackColor}`)};
    white-space: nowrap;
    padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
    color: ${({dark}) => (dark ? `${blackColor}` : '#fff')};
    font-size: ${({big}) => (big ? '20px' : '16px')};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;

    &:hover{
        transition: all 0.2s ease-in-out;
        background: ${({primary})=> (primary ? '#fff': `${color}`)};
    }
`