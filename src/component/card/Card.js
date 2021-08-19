import "./Card.scss";

const Card = (props) => (
    <div className='card-container'>
       <div className="card-container__imagebox">
           <img className="card-container__image" key={props.video.id} src={props.video.image} alt="aside-images"/>
      </div> 
      <div className="card-container__details">
          <h2 className="card-container__title">{props.video.title}</h2>
          <h3 className="card-container__channel">{props.video.channel}</h3>
      </div> 
    </div>
  );

  export default Card;