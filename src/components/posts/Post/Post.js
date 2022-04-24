import pcss from'./Post.module.css'

const Post = ({post}) => {
    let {id, title, body} = post
    return (
        <div className={pcss.post}>
            <h1>{id}</h1>
            <h3>{title}</h3>
            <p>{body}</p>
        </div>
    );
};
export {Post}

