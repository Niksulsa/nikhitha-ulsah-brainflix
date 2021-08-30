import React from 'react';
import {AsideList} from '../../component/aside-list/AsideList';
import Hero from '../../component/hero-container/Hero';
import Details from '../../component/details/Details';
import Comments from '../../component/comments/Comments';
import {API_URL} from '../../utils/Utils';
import {API_KEY} from '../../utils/Utils';
import axios from 'axios';
import '../../styles/App.scss';



class HomePage extends React.Component {
    state = {
        videos: [],
        currentVideo: null
    };

    getVideoId(id) {
        axios.get("https://project-2-api.herokuapp.com/videos/"+ id +"?api_key=0970314e-fe04-430a-97c4-37d75de82864").then((response) => {
            //console.log(response)
            this.setState({currentVideo: response.data})
        })
    }


    getVideo = () => {
        if (this.props.match.params.videoId) {
            this.getVideoId(this.props.match.params.videoId)
        } else {
            axios.get(`${API_URL}?api_key=${API_KEY}`).then((response) => {
                //console.log(response.data)
                this.getVideoId(response.data[0].id)
            })
        }
    };

    componentDidMount() {
        //console.log("Mounted");
        axios.get(`${API_URL}?api_key=${API_KEY}`).then((response) => {
            this.setState({videos: response.data})
        });
        this.getVideo();
        // console.log(videoDetails);
    };

    componentDidUpdate(previousProps) {
        //console.log(previousProps);
        if (this.props.match.params.videoId !== previousProps.match.params.videoId) {
            this.getVideo();
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
                        <AsideList videoItems={filteredVideo}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomePage;
