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

const BlogListItem = ({_id:id, title, description, author, categories, fetchPosts}) => {

    async function deletePost() {
        if (window.confirm('Do you really want to delete this post?')){
            await axios.delete('http://localhost:5000/api/posts/' + id);
            fetchPosts();
        }
    }

    const {user} = useContext(UserContext);

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
                    <BtnEdit />
                    <Btntrash onClick={deletePost}/>
                </BtnEditContainer>}
            </BtnWrap>
        </BlogItemWrapper>  
    )
}

export default BlogListItem
