import {Post} from '../Post/Post';
import pscss from './Posts.module.css'
import {postsService} from "../../../services";
import {useEffect, useState} from "react";

const Posts = ({userId}) => {
    const [posts, setPosts] = useState(null)

    useEffect(() => {
        postsService.getUsersPostsById(userId).then(({data}) => setPosts(data))
    }, [userId])

    return (
        <>
            {posts &&
                <div className={pscss.posts}>
                    <h1>Posts</h1>
                    {posts.map(post => <Post key={post.id} post={post}/>)}
                </div>
            }
        </>
    );
};
export {Posts}
