import {useEffect, useState} from "react";

import {Post} from '../Post/Post';
import './Posts.css'
import {postsService} from "../../../services";

export const Posts = () => {
    const [posts, setPosts] = useState(null)
    useEffect(() => {
        postsService.getAllPosts()
            // .then(value => {
            //     value.length = 40
            //     return value})

            .then(value => value.slice(0, 40))
            .then(value => setPosts(value))
    }, [])
    return (
        <div className={'posts'}>
            {posts && posts.map(post => <Post key={post.id} post={post}/>)}
        </div>
    );
};
