import UploadThumbnail from '../../assets/Images/upload-video-preview.jpg';
import React, {Component} from 'react'
import {Link} from 'react-router-dom';

import './UploadPage.scss';

export default class UploadPage extends Component {
    render() {
        return (
            <section className="upload">
                <div>
                    <h1 className="upload__heading">Upload Video</h1>
                </div>
                <div className="upload__container">
                    <div className="upload__thumbnailbox">
                        <h3 className="upload__thumbnailheading">VIDEO THUMBNAIL</h3>
                        <img className="upload__thumbnail" src={UploadThumbnail}
                            alt=""/>
                    </div>
                    <section className="upload__formcontainer">
                        <form className="upload__form">
                            <div className="upload__titlebox">
                                <label htmlFor="name" className="upload__title">TITLE YOUR VIDEO</label><br />
                                <input type="text" className="upload__inputbox" name="name" placeholder="Add a title to your video"/>
                            </div>
                            <div className="upload__description">
                                <label htmlFor="textarea" className="upload__title" >ADD A VIDEO DESCRIPTION</label>
                                <textarea name="comment" cols="35" rows="5" className="upload__videodescription" placeholder="Add a description to your video"></textarea>
                                <div className="upload__buttonbox">
                                    <button id="cancel" type="reset" className="upload__cancel">CANCEL</button>
                                    <Link to="/" className="upload__publishbox">
                                        <button id="submit" type="submit" className="upload__publish">PUBLISH</button>
                                    </Link>
                                </div>
                            </div>
                        </form>
                    </section>
                </div>
            </section>
        )
    }
}
