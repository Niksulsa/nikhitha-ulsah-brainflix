import React from 'react';
import {AsideList} from '../../component/aside-list/AsideList';
import Hero from '../../component/hero-container/Hero';
import Details from '../../component/details/Details';
import Comments from '../../component/comments/Comments';
import {API_URL} from '../../utils/Utils';
import axios from "axios";
import '../../styles/App.scss';



class HomePage extends React.Component {
    state = {
        videos: [],
        currentVideo: null
    };

    getVideoId=(id)=> {
        axios.get(`${API_URL}/videos/${id}`).then((response) => {
            //console.log(response)
            this.setState({currentVideo: response.data })
        }).catch((error)=>{
            console.log(error)
        });
    }


    componentDidMount() {
        //console.log("Mounted");
        axios.get(`${API_URL}/videos`).then(response => {
            this.setState({videos: response.data})
            this.getVideoId(response.data[0].id);
        }).catch((error)=>{
            console.log(error)
        });
    };

    componentDidUpdate(previousProps) {
        //console.log(previousProps);
        if (this.props.match.params.id !== previousProps.match.params.id) {
            this.getVideoId(this.props.match.params.id);
        }
    };

    

    render() { 
       

        if(!this.state.currentVideo){
            return <h1>...Loading</h1>
        }

        const filteredVideo = this.state.videos.filter((video) => video.id !== this.state.currentVideo.id);
        // console.log(filteredVideo);

        return (
            <div className="App">
                <Hero currentVideo={
                    this.state.currentVideo
                }/>
                <div className="content">
                    <div className="content__left">
                        <Details currentVideo={
                            this.state.currentVideo
                        }/>
                        <Comments currentVideo={
                            this.state.currentVideo}/>
                    </div>
                    <div className="content__right">
                        <AsideList videoItems={filteredVideo}
                        selectedVideo={this.currentVideo} />
                    </div>
                </div>
            </div>
        );
    }
}

export default HomePage;
