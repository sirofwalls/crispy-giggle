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

const BlogListItem = ({_id:id, title, description, author, categories}) => {
    return (
        <BlogItemWrapper id={id} category={categories}>
            <BlogTextWrapper>
                <BlogHeading>{title}</BlogHeading>
                <BlogPartialText>{parse(description.slice(0, 180))}</BlogPartialText>
            </BlogTextWrapper>
            <BtnWrap>
                <ExternalButton to={{pathname: `/blog/${id}`}}>Read the entire post</ExternalButton>
                <BtnEditContainer>
                    <BtnEdit />
                    <Btntrash />
                </BtnEditContainer>
            </BtnWrap>
        </BlogItemWrapper>  
    )
}

export default BlogListItem
