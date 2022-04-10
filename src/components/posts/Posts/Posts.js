import {useEffect, useState} from "react";

import {Post} from '../../../components';
import './Posts.css'

export const Posts = () => {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(value => setPosts(value))
    }, [])
    return (
        <div className={'posts'}>
            {posts.map(post => <Post key={post.id} post={post}/>)}
        </div>
    );
};
