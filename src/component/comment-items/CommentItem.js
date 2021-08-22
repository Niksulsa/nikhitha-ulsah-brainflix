

export const CommentItem=({comment})=> {
    return (
    <div className="comment__item">
        <div className="comment__avatardiv"></div>
        <div className="comment__details">
             <h3 className="comment__name">{comment.name}</h3>
             <div className="comment__comments">{comment.comment}</div>
        </div>  
    </div>
    )
};
  
