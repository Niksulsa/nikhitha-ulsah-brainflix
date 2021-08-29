import UploadThumbnail from '../../assets/Images/upload-video-preview.jpg';
import React, {Component} from 'react'
import './UploadPage.scss';


export default class UploadPage extends Component {
    state = {
        title: "",
        description: ""
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.history.push('/home')
        setTimeout(() => {
            alert("Published successfully");
        }, 1000);
    };

    handleChange = (event) => {
        let isValid = this.isFormValid();
        console.log(isValid);

        this.setState({[event.target.name]: event.target.value});

    }


    isFormValid = () => {
        if (!this.state.title || !this.state.description) {
            return false;
        } else 
            return true;
        

    }


    render() {
        let errorMessage = "";

        if (!this.isFormValid()) {
            errorMessage = "Please fill in the details";
        }
        return (
            <section className="upload">
                <div>
                    <h1 className="upload__heading">Upload Video</h1>
                </div>
                <div className="upload__container">
                    <div className="upload__thumbnailbox">
                        <h3 className="upload__thumbnailheading">VIDEO THUMBNAIL</h3>
                        <video className="upload__thumbnail"
                            poster={UploadThumbnail}/>
                    </div>
                    <section className="upload__formcontainer">
                        <form onSubmit={
                                this.handleSubmit
                            }
                            className="upload__form">
                            <div className="upload__titlebox">
                                <label htmlFor="title" className="upload__title">TITLE YOUR VIDEO</label><br/>
                                <input onChange={
                                        this.handleChange
                                    }
                                    value={
                                        this.state.title
                                    }
                                    type="text"
                                    className="upload__inputbox"
                                    name="title"
                                    placeholder="Add a title to your video"
                                    required/>

                            </div>
                            <div className="upload__description">
                                <label htmlFor="textarea" className="upload__title">ADD A VIDEO DESCRIPTION</label>
                                <input onChange={
                                        this.handleChange
                                    }
                                    value={
                                        this.state.description
                                    }
                                    name="description"
                                    className="upload__videodescription"
                                    placeholder="Add a description to your video"
                                    required></input>

                                <div className="upload__buttonbox">
                                    <button id="cancel" type="reset" className="upload__cancel">CANCEL</button>
                                    <div className="upload__publishbox">
                                        <button type="submit" className="upload__publish">PUBLISH</button>
                                    </div>

                                </div>
                            </div>
                        </form>
                    </section>
                </div>
            </section>
        )
    }
}
