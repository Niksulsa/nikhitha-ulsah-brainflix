import './App.scss';
import Header from './component/header/Header';
import React from 'react';
import { AsideList } from './component/aside-list/AsideList';
import videoData from './data/videos.json';
import videoDetails from './data/video-details.json';
import Hero from './component/hero-container/Hero';
import Details from './component/details/Details';
import { Comments } from './component/comments/Comments';



class App extends React.Component {
  state={
    videos:videoData,
    currentVideo:videoDetails[0],
  };  
  
  handleEvent=(clickedId)=>{
    const foundVideo=this.state.videoDetails.find((video)  => clickedId === video.id)
    
    this.setState({
      currentVideo:foundVideo,
    })
  };
  render(){
    const filteredVideo=this.state.videos.filter((video)=>video.id !==this.state.currentVideo.id);

    return (
      <div className="App">
        <Header />
        <Hero currentVideo={this.state.currentVideo}/>
        <div className="content">   
          <div className="content__left"> 
             <Details currentVideo={this.state.currentVideo}/>
             <Comments currentVideo={this.state.currentVideo}/>
          </div>   
          <AsideList videoItems={filteredVideo} currentVideo={this.handleEvent}/>
        </div>
      </div>
    );
  }
}

export default App;
