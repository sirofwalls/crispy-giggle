import React from 'react'
import BlogListItem from '../BlogListItem/BlogListItem'
import {blogPosts, blogCategories} from '../Variables/DummyBlogData';
import { BlogListContainer, BlogListHeading, BlogListWrapper,ListHeadingWrapper, CategorySelect, CategoryOption } from './BlogListElements'

const BlogList = () => {
    return (
        <>
        <BlogListContainer>
            <BlogListWrapper>
                <ListHeadingWrapper>
                    <BlogListHeading>Here are my BLOG Posts!</BlogListHeading>
                    <CategorySelect>
                        <CategoryOption value=''>--Categories--</CategoryOption>
                        {blogCategories.map((item, index) => {
                            return (
                                <CategoryOption value={item.name} key={index}>{item.name}</CategoryOption>
                            )
                        })}
                    </CategorySelect>
                </ListHeadingWrapper>
                {blogPosts.map((items, index) => {
                    return (
                        <BlogListItem {...items} key={index} />
                    )
                })}
            </BlogListWrapper>
        </BlogListContainer>
        </>
    )
}

export default BlogList
