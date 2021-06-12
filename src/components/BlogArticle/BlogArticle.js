import React, {useState, useEffect} from 'react';
import { BlogArticleContainer, BlogArticleWrapper, BlogArticleHeading, BlogArticleText } from './BlogArticleElements';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import parse from 'html-react-parser';

const BlogArticle = () => {
    
    const location = useLocation();
    const path = location.pathname.split('/')[2];
    const [post, setPost] = useState({});

    useEffect(() =>{
        const fetchPost = async () => {
            const res = await axios.get('http://localhost:5000/api/posts/' + path);
            setPost(res.data);
        }
        fetchPost();
    },[path])

    return (
        <BlogArticleContainer>
            <BlogArticleWrapper>
                <BlogArticleHeading>{post.title}</BlogArticleHeading>
                <BlogArticleText>{post.description && parse(post.description)}</BlogArticleText>
            </BlogArticleWrapper>
        </BlogArticleContainer>
    )
}

export default BlogArticle
