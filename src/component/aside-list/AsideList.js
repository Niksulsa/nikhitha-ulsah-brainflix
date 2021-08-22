import Card from "../card/Card";
import './asideList.scss';

export const AsideList=(props)=>(
    <div className="aside">
        <p className="aside__next">NEXT VIDEO</p>
        {props.videos.map((video)=>(
            <Card key={video.id} video={video}></Card>
        ))}

    </div>
)