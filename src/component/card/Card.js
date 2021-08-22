import "./Card.scss";
import React from 'react';

function Card (props) {
    <div className='aside__carditem'>
       <div className="aside__imagebox">
           <img className="aside__image" key={props.video.id} src={props.video.image} alt="aside-images"/>
      </div> 
      <div className="aside__details">
          <h2 className="aside__title">{props.video.title}</h2>
          <h3 className="aside__channel">{props.video.channel}</h3>
      </div> 
    </div>
};
  export default Card;