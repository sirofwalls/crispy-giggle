import styled from 'styled-components';
import { Style } from '../Variables/StyleVariables';

export const BlogEditForm = styled.form`
    display: flex;
    flex-direction: column;
`

export const EditErrorMessage = styled.p`
    text-align: center;
    text-transform: capitalize;
    color: tomato;
    font-weight: bold;
    font-size: 1.5rem;
`

export const BlogEditContainer = styled.div`
    width: 100%;
    padding: 0 2rem;
`

export const EditLabel = styled.label`
    color: ${Style.darkColor};
    font-size: 2rem;
    margin: 1rem 0;
    padding: 0.2rem 0;
    text-align: center;
`

export const Editor = styled.div`
    padding-bottom: 1.5rem;

    .ck-editor__editable_inline {
        min-height: 450px;
    }
    .ck.ck-toolbar.ck-toolbar_grouping > .ck-toolbar__items {
        flex-wrap: wrap;
    }
`

export const EditLabelInput = styled.input`
    border-radius: 15px;
    text-align: center;
    font-size: 1.5rem;
    border: 1px solid ${Style.darkColor};
    width: 100%;
    padding: .5rem 0;

    &:focus{
        outline: none
    }
`

export const EditorButtonSection = styled.div`
    display: flex;
    width: 100%;
`

export const EditorSubmitButton = styled.button`
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
    margin: 3rem auto;

    &:hover{
        transition: all 0.2s ease-in-out;
        background: ${Style.mainColor};
    }
`

export const EditorCancelButton = styled.button`
    border-radius: 50px;
    background: tomato;
    white-space: nowrap;
    padding: 12px 30px;
    color: ${Style.darkColor};
    font-size: 1.2rem;
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    margin: 3rem auto;

    &:hover{
        transition: all 0.2s ease-in-out;
        background: ${Style.mainColor};
        color: ${Style.lightColor};
    }
`