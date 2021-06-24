import React, {useState} from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {BlogEditContainer, BlogEditForm, EditLabel, Editor, EditLabelInput, EditorSubmitButton, EditorCancelButton, EditorButtonSection} from './BlogEditElements';

function BlogEdit({setIsOpen}) {

    const [text, setText] = useState('');
    const [title, setTitle]= useState('');
    const [errorMessage, setErrorMessage] = useState(null)

    const blogSubmitHandler = async (e) => {
        e.preventDefault();
        setIsOpen(false)
        console.log(text);
        console.log(title)
    }

    const ckEditorChange = (event, editor) => {
        const data = editor.getData()
        setText(data)
    }

    const cancelButtonHandler = () => {
        setIsOpen(false)
    }

    return (
        <>
        <BlogEditContainer>
            <BlogEditForm onSubmit={blogSubmitHandler}>
                <EditLabel htmlFor='title'>Title</EditLabel>
                <EditLabelInput id='title' type='text' value={title} onChange={(e) => setTitle(e.target.value)} />
                <EditLabel>Description</EditLabel>
                <Editor>
                    <CKEditor editor={ClassicEditor} data={text} onChange={ckEditorChange} />
                </Editor>
                <EditorButtonSection>
                    <EditorSubmitButton type='submit' onClick={blogSubmitHandler}>Save</EditorSubmitButton>
                    <EditorCancelButton type='button' onClick={cancelButtonHandler}>Cancel</EditorCancelButton>
                </EditorButtonSection>
            </BlogEditForm>
        </BlogEditContainer>
        </>
    )
}

export default BlogEdit
