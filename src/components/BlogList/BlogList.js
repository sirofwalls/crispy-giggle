import React, {useState} from 'react'
import BlogListItem from '../BlogListItem/BlogListItem'
import {blogPosts, blogCategories} from '../Variables/DummyBlogData';
import { BlogListContainer, BlogListHeading, BlogListWrapper,ListHeadingWrapper, CategorySelect, CategoryOption } from './BlogListElements'

const BlogList = () => {

    const [filterCategory, setFilterCategory] = useState('');
    
    const dropDownChangeHandler = (event) => {
        setFilterCategory(event.target.value) 
    }
    
    const filteredPosts = blogPosts.filter(post => {
        if(filterCategory === '') return post.categories;
        return post.categories.includes(filterCategory);
    });

    return (
        <>
        <BlogListContainer>
            <BlogListWrapper>
                <ListHeadingWrapper>
                    <BlogListHeading>Here are my BLOG Posts!</BlogListHeading>
                    <CategorySelect onChange={dropDownChangeHandler}>
                        <CategoryOption value=''>--Categories--</CategoryOption>
                        {blogCategories.map((item, index) => {
                            return (
                                <CategoryOption value={item.name} key={index}>{item.name}</CategoryOption>
                            )
                        })}
                    </CategorySelect>
                </ListHeadingWrapper>
                {filteredPosts.map((items, index) => {
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
