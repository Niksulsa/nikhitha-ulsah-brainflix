import React from 'react';
import './details.scss';
import View from '../../assets/Icons/Icon-views.svg';
import Like from '../../assets/Icons/Icon-likes.svg';
import Formatteddate from '../timestamp/Formatteddate';

const Details=({currentVideo}) =>{
    return (
        <div className="details">
            <h1 className="details__currentvideoname">{currentVideo.title}</h1>
            <div className="details__uploadbox">
                 <div className="details__uploaderdetails">
                     <h2 className="details__videoby">by {currentVideo.channel}</h2>
                     <span className="details__uploaddate">{Formatteddate(currentVideo.timestamp)}</span>
                 </div>
                 <div className="details__social">
                     <img className="details__viewimage" src={View} alt=""/><span className="card__views">{currentVideo.views}</span>
                     <img className="details__likeimage" src={Like} alt=""/><span className="card__likes">{currentVideo.likes}</span>
                 </div>
            </div>
            <div>
                <p className="details__videodetails">{currentVideo.description}</p>
            </div>
        </div>
    )
}



export default Details;
