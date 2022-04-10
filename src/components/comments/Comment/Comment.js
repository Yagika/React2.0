import './Comment.css'

const Comment = ({comment}) => {
    let {id, name, email, body} = comment
    return (
        <div className={'comment'}>
            <h3>{id}.{name}</h3>
            <p>{email}</p>
            <p>{body}</p>
        </div>
    );
};

export default Comment;