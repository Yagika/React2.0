import {Post} from '../Post/Post';
import pscss from './Posts.module.css'

const Posts = ({posts}) => {
    return (
        <div className={pscss.posts}>
            <h1>Posts</h1>
            {posts.map(post => <Post key={post.id} post={post}/>)}
        </div>
    );
};
export {Posts}
