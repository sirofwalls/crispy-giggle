import React from 'react';
import {
    BlogItemWrapper,
    BlogTextWrapper,
    BlogHeading,
    BlogPartialText,
    BtnWrap,
    BtnEdit,
    Btntrash,
    BtnEditContainer,
} from './BlogListItemElements';
import {ExternalButton} from '../ButtonElement';
import parse from 'html-react-parser';
import axios from 'axios';
import UserContext from '../../context/UserContext';
import { useContext } from 'react';

const BlogListItem = ({_id:id, title, description, author, categories, fetchPosts, editPost}) => {
    const API_URL = (process.env.NODE_ENV === 'production' ? 'https://api.ptrwlsr.com' : 'http://localhost:5000');

    async function deletePost() {
        if (window.confirm('Do you really want to delete this post?')){
            await axios.delete(API_URL + '/api/posts/' + id);
            fetchPosts();
        }
    }

    const {user} = useContext(UserContext);

    const editPostData = {
        _id: id,
        title,
        description,
        author,
        categories
    }

    return (
        <BlogItemWrapper id={id} category={categories}>
            <BlogTextWrapper>
                <BlogHeading>{title}</BlogHeading>
                <BlogPartialText>{parse(description.slice(0, 180))}</BlogPartialText>
            </BlogTextWrapper>
            <BtnWrap>
                <ExternalButton to={{pathname: `/blog/${id}`}}>Read the entire post</ExternalButton>
                {user === author &&
                    <BtnEditContainer>
                        <BtnEdit onClick={() => editPost(editPostData)}/>
                        <Btntrash onClick={deletePost}/>
                    </BtnEditContainer>
                }
            </BtnWrap>
        </BlogItemWrapper>  
    )
}

export default BlogListItem
