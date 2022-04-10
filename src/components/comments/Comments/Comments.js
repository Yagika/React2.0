import Comment from "../Comment/Comment";
import './Comments.css'
import {useEffect, useState} from "react";

export const Comments = () => {
    const [comments, setComments] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(value => value.json())
            .then(value => setComments(value))
    }, [])
    return (
        <div className={'comments'}>
            {comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
        </div>
    );
};