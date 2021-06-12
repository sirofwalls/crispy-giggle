import React, {useState, useEffect} from 'react';
import BlogListItem from '../BlogListItem/BlogListItem';
import { BlogListContainer, BlogListHeading, BlogListWrapper,ListHeadingWrapper, CategorySelect, CategoryOption } from './BlogListElements'
import axios from 'axios';

const BlogList = () => {

    const [filterCategory, setFilterCategory] = useState('');
    const [posts, setPosts] = useState([]);
    const [category, setCategory] = useState([]);

    useEffect(() =>{
        const fetchPosts = async () => {
            const res = await axios.get('http://localhost:5000/api/posts');
            setPosts(res.data)
        }
        fetchPosts();
    },[])

    useEffect(() =>{
        const fetchCategories = async () => {
            const res = await axios.get('http://localhost:5000/api/categories');
            setCategory(res.data)
        }
        fetchCategories();
    },[])
    
    const dropDownChangeHandler = (event) => {
        setFilterCategory(event.target.value) 
    }
    
    const filteredPosts = posts.filter(post => {
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
                        {category.map((item, index) => {
                            return (
                                <CategoryOption value={item.name} key={index}>{item.name[0].toUpperCase() + item.name.substr(1)}</CategoryOption>
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
