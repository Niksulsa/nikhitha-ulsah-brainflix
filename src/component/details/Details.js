import React from 'react';
import './details.scss';
import View from '../../assets/Icons/Icon-views.svg';
import Like from '../../assets/Icons/Icon-likes.svg';

const Details=({selectedVideo}) =>{
    return (
        <div className="details">
            <h1 className="details__currentvideoname">{selectedVideo.title}</h1>
            <div className="details__uploadbox">
                 <div class="details__uploaderdetails">
                     <h2 className="details__videoby">by {selectedVideo.channel}</h2>
                     <span className="details__uploaddate">{new Date(selectedVideo.timestamp ).toDateString()}</span>
                 </div>
                 <div className="details__social">
                     <img className="details__viewimage" src={View} alt=""/><span className="card__views">{selectedVideo.views}</span>
                     <img className="details__likeimage" src={Like} alt=""/><span className="card__likes">{selectedVideo.likes}</span>
                 </div>
            </div>
            <div>
                <p className="details__videodetails">{selectedVideo.description}</p>
            </div>
        </div>
    )
}



export default Details;
