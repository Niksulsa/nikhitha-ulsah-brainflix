import React from 'react';
import { CommentItem } from '../comment-items/CommentItem';

export const Comments=({selectedVideo})=> (
    <div className="comment__box">
        {selectedVideo.comments.map((comment)=>(
        <CommentItem key={comment.id} comment={comment}/>
    ))}
    </div>
);

