import './App.scss';
import Header from './component/header/Header';
import React from 'react';
import { AsideList } from './component/aside-list/AsideList';
import videoDetails from './data/video-details.json';
import Hero from './component/hero-container/Hero';
import Details from './component/details/Details';
import { Comments } from './component/comments/Comments';



class App extends React.Component {
  state={
    videos:videoDetails,
    selectedVideo:videoDetails[0]
  };  
  
  handleEvent=(clickedId)=>{
    const foundVideo=videoDetails.find((video)=>clickedId===video.id)
    
    this.setState({
      selectedVideo:foundVideo,
    })
  };
  render(){
    const filteredVideo=this.state.videos.filter((video)=>video.id !==this.state.selectedVideo.id);
    return (
      <div className="App">
        <Header />
        <Hero selectedVideo={this.state.selectedVideo}/>
        <div className="content">   
          <div className="content__left"> 
             <Details selectedVideo={this.state.selectedVideo}/>
             <Comments selectedVideo={this.state.selectedVideo}/>
          </div>   
          <AsideList videos={this.handleEvent}/>
        </div>
      </div>
    );
  }
}

export default App;
