import Card from "../card/Card";

export const AsideList=(props)=>(
    <div className="aside-list">
        {props.videos.map((video)=>(
            <Card key={video.id} video={video}></Card>
        ))}

    </div>
)