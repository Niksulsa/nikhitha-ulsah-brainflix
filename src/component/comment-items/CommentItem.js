

export const CommentItem=({comment})=> {
    return (

    <div className="comment__item">
            <div className="comment__numbers">{comment.length}</div>
            <div>
                <h3 className="comment__name">{comment.name}</h3>
                <div className="comment__details">{comment.comment}</div>
            </div>
        </div>
    )
};
  
