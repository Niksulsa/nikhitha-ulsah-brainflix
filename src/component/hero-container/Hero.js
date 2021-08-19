import Card from "../../card/card";

export const Hero = (props) => (
    <div className='card-list'>
      {props.videos.map((video) => (
        <Card key={video.id} video={video}></Card>
      ))}
    </div>
  );