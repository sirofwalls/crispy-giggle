import React from 'react'
import BlogListItem from '../BlogListItem/BlogListItem'
import { blogObj1, blogObj2, blogObj3 } from '../BlogListItem/Data'
import { BlogListContainer, BlogListHeading, BlogListWrapper } from './BlogListElements'

const BlogList = () => {
    return (
        <>
        <BlogListContainer>
            <BlogListWrapper>
                <BlogListHeading>Here are my BLOG Posts!</BlogListHeading>
                <BlogListItem {...blogObj1} />
                <BlogListItem {...blogObj2} />
                <BlogListItem {...blogObj3} />
                <BlogListItem {...blogObj2} />
                <BlogListItem {...blogObj3} />
            </BlogListWrapper>
        </BlogListContainer>
        </>
    )
}

export default BlogList
