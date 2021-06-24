import React, {useState, useEffect} from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {BlogEditContainer, EditErrorMessage, BlogEditForm, EditLabel, Editor, EditLabelInput, EditorSubmitButton, EditorCancelButton, EditorButtonSection} from './BlogEditElements';
import axios from 'axios';

function BlogEdit({setIsOpen, fetchPosts, postEditData, setPostEditData}) {

    const [text, setText] = useState('');
    const [title, setTitle]= useState('');
    const [errorMessage, setErrorMessage] = useState(null)

    useEffect(() => {
        if(postEditData) {
            setText(postEditData.description);
            setTitle(postEditData.title);
        }
    }, [postEditData])

    const blogSubmitHandler = async (e) => {
        e.preventDefault();

        const blogData = {
            title,
            description: text
        }

        if (!postEditData){
            try{
                await axios.post('http://localhost:5000/api/posts', blogData)
            } catch (err) {
                if (err.response.data) setErrorMessage(err.response.data)
                return
            }
        } else {
            try {
                await axios.put('http://localhost:5000/api/posts/' + postEditData._id, blogData)
            } catch(err) {
                if (err.response.data) setErrorMessage(err.response.data)
                return
            }
        }

        setErrorMessage(null)
        setText('');
        setTitle('');
        setIsOpen(false);
        fetchPosts();
    }

    const ckEditorChange = (event, editor) => {
        const data = editor.getData()
        setText(data)
    }

    const cancelButtonHandler = () => {
        setPostEditData(null);
        setTitle('');
        setText('');
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
                {errorMessage && <EditErrorMessage>{errorMessage}</EditErrorMessage>}
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
