import './Post.css'

const Post = ({post}) => {
    let {id, title, body} = post
    return (
        <div className={'post'}>
            <h3>{id}.{title}</h3>
            <p>{body}</p>
        </div>
    );
};

export default Post;