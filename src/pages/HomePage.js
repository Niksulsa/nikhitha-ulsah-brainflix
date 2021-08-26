import '../App.scss';
import React from 'react';
import {AsideList} from '../component/aside-list/AsideList';
// import videoData from '../data/videos.json';
// import videoDetails from '../data/video-details.json';
import Hero from '../component/hero-container/Hero';
import Details from '../component/details/Details';
import Comments from '../component/comments/Comments';
import {API_URL} from '../utils/Utils';
import {API_KEY} from '../utils/Utils';
import axios from 'axios';


class HomePage extends React.Component {
    state = {
        videos: [],
        currentVideo: {}
    };

    getVideoId(id) {
        axios.get("https://project-2-api.herokuapp.com/videos/"+ id +"?api_key=65d53841-74a4-4388-b36b-1efa54703dbf").then((response) => {
            console.log(response)
            this.setState({currentVideo: response.data})
        })
    }


    getVideo = () => {
        if (this.props.match.params.videoId) {
            this.getVideoId(this.props.match.params.videoId)
        } else {
            axios.get("https://project-2-api.herokuapp.com/videos/?api_key=65d53841-74a4-4388-b36b-1efa54703dbf").then((response) => {
                console.log(response.data)
                this.getVideoId(response.data[0].id)
            })
        }
    }

    componentDidMount() {
        axios.get(`${API_URL}?api_key=${API_KEY}`).then((response) => {
            this.setState({videos: response.data})
        });
        this.getVideo();
        // console.log(videoDetails);
    }

    componentDidUpdate(previousProps) {
        console.log(previousProps);
        if (this.props.match.params.videoId !== previousProps.match.params.videoId) {
            this.getVideo();
        }

    }

    render() { // console.log(this.props.match.params.videoId);
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
                        <AsideList videoItems={filteredVideo}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomePage;
