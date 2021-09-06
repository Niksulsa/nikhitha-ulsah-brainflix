import './asideList.scss';
import {NavLink} from 'react-router-dom';

export const AsideList=({videoItems, selectedVideo})=>(
    <div className="aside">
        <p className="aside__next">NEXT VIDEO</p>
        {videoItems.map((video)=>(
                <NavLink key={video.id} to={`/videos/${video.id}`} className='aside__carditem'>
                     <div className="aside__imagebox">
                         <img className="aside__image" key={video.id} src={video.image} alt="aside-images"/>
                    </div> 
                     <div className="aside__details">
                         <h2 className="aside__title">{video.title}</h2>
                         <h3 className="aside__channel">{video.channel}</h3>
                    </div> 
                </NavLink>
                )
        )}
    </div>
)