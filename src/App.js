import './App.scss';
import Header from './component/header/Header';
import React from 'react';
import { AsideList } from './component/aside-list/AsideList';
import videoDetails from './data/video-details.json';
import Hero from './component/hero-container/Hero';
import Details from './component/details/Details';
import { Comments } from './component/comments/Comments';
import Form from './component/forms/Forms'


class App extends React.Component {
  state={
    videos:videoDetails,
    selectedVideo:videoDetails[0]
  };  
  
  render(){
    return (
      <div className="App">
        <Header />
        <Hero selectedVideo={this.state.selectedVideo}/>
        <Details selectedVideo={this.state.selectedVideo}/>
        <Form />
        <Comments selectedVideo={this.state.selectedVideo}/>
        <AsideList videos={this.state.videos}/>
      </div>
    );
  }
}

export default App;
