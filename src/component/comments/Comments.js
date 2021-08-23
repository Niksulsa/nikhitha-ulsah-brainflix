import React from 'react';
import { CommentItem } from '../comment-items/CommentItem';
import './comments.scss';
import Avatar from '../../assets/Images/mohan-muruge.jpg';

export const Comments=({currentVideo})=> (
    
    <section className="comment">
        <article className="comment__container">
            <div className="comment__numbers">{currentVideo.comments.length } Comments</div>
            <div className="comment__form">
                 <img className="comment__avatar" src={Avatar} alt=""/>
                 <form className="comment__formmain" id="add-comment">
                     <label className="comment__conversation">JOIN THE CONVERSATION<br/>
                         <input className="comment__input" type="text" name="comment" placeholder="write comment here"  />
                     </label>                        
                    <br />   
                    <button className="comment__button">COMMENT</button>
                 </form>
            </div>
       </article>
       <article className="comment__itemcontainer">
             {currentVideo.comments.map((comment)=>(
             <CommentItem key={comment.id} comment={comment}/>))}
        </article>
    </section>
);

