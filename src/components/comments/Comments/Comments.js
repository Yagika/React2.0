import {Comment} from "../Comment/Comment";
import './Comments.css'
import {useEffect, useState} from "react";
import {commentsService} from "../../../services";

export const Comments = () => {
    const [comments, setComments] = useState([])
    useEffect(() => {
       commentsService.getAllComments().then(value => setComments(value))
    }, [])
    return (
        <div className={'comments'}>
            {comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
        </div>
    );
};