import React, {useState, useEffect} from 'react';
import BlogListItem from '../BlogListItem/BlogListItem';
import { BlogListContainer, BlogListHeading, BlogListWrapper,ListHeadingWrapper, CategorySelect, CategoryOption, BlogEditButton } from './BlogListElements'
import axios from 'axios';
import BlogEdit from '../BlogEdit/BlogEdit';
import { useContext } from 'react';
import UserContext from '../../context/UserContext';

const BlogList = () => {

    const [filterCategory, setFilterCategory] = useState('');
    const [category, setCategory] = useState([]);
    const [posts, setPosts] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [postEditData, setPostEditData] = useState(null);
    const API_URL = (process.env.NODE_ENV === 'production' ? 'https://api.ptrwlsr.com' : 'http://localhost:5000');

    const {user} = useContext(UserContext);

    const fetchPosts = async () => {
        try{
            const res = await axios.get(API_URL + '/api/posts');
            setPosts(res.data)
        } catch (err) {
            console.log(err)
        }
    };

    const editPost = (editPostData) => {
        setPostEditData(editPostData);
        setIsOpen(true);
    }

    useEffect(() =>{
        fetchPosts();
    },[])

    useEffect(() =>{
        const fetchCategories = async () => {
            const res = await axios.get(API_URL + '/api/categories');
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
    }).sort((a, b) => {
        return new Date(b.createdAt) - new Date(a.createdAt)
    });

    return (
        <>
        <BlogListContainer>
            <BlogListWrapper>
                <ListHeadingWrapper>
                    <BlogListHeading>Here are my BLOG Posts!</BlogListHeading>
                    {!isOpen && user &&<BlogEditButton onClick={() => setIsOpen(true)}>Create New Post</BlogEditButton>}
                    {isOpen && <BlogEdit setIsOpen={setIsOpen} setPostEditData={setPostEditData} postEditData={postEditData} fetchPosts={fetchPosts}/>}
                    <CategorySelect onChange={dropDownChangeHandler}>
                        <CategoryOption value=''>--Categories--</CategoryOption>
                        {category.map((item, index) => {
                            return (
                                <CategoryOption value={item.name} key={index}>
                                    {item.name[0].toUpperCase() + item.name.substr(1)}
                                </CategoryOption>
                            )
                        })}
                    </CategorySelect>
                </ListHeadingWrapper>
                {filteredPosts.map((items, index) => {
                    return (
                        <BlogListItem {...items} key={index} editPost={editPost} fetchPosts={fetchPosts}/>
                    )
                })}
            </BlogListWrapper>
        </BlogListContainer>
        </>
    )
}

export default BlogList
