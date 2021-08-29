import Formatteddate from "../timestamp/Formatteddate";

export const CommentItem=({comment})=> {
    //console.log(comment)
    return (
    <div className="comment__item">
        <div className="comment__avatardiv"></div>
        <div className="comment__details">
            <div className="comment__nametimebox">
                <h3 className="comment__name">{comment.name}</h3>
                <span className="comment__date">{Formatteddate(comment.timestamp)}</span>
            </div>
             <div className="comment__comments">{comment.comment}</div>
        </div>  
    </div>
    )
};

  
