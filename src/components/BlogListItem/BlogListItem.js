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

const BlogListItem = ({id, primary, dark, lightText, darkText, BHeadingText, BPText, ButtonText, lightBg}) => {
    return (
        <BlogItemWrapper id={id} lightBg={lightBg}>
            <BlogTextWrapper>
                <BlogHeading lightText={lightText}>{BHeadingText}</BlogHeading>
                <BlogPartialText darkText={darkText}>{BPText}</BlogPartialText>
            </BlogTextWrapper>
            <BtnWrap>
                <ExternalButton to={{pathname: `/blog:${id}`}} primary={primary ? 1 : 0} dark={dark ? 1 : 0}>{ButtonText}</ExternalButton>
                <BtnEditContainer>
                    <BtnEdit />
                    <Btntrash />
                </BtnEditContainer>
            </BtnWrap>
        </BlogItemWrapper>  
    )
}

export default BlogListItem
