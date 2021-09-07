import UploadThumbnail from '../../assets/Images/upload-video-preview.jpg';
import React from 'react'
import './UploadPage.scss';
import swal from 'sweetalert';
import {API_URL} from '../../utils/Utils';
import axios from "axios";
import { createRef } from 'react';

const formInput =createRef();
export default function UploadPage(props) {
    //const formInput = React.createRef();
    const publishEvent = (event) => {
        event.preventDefault();
        const title=formInput.current.title.value;
        const description=formInput.current.description.value;
        if (!title || !description) {
            return alert("Fill in more details");
        } if (title.length < 6 && description.length<6) {
            return alert("Fill in more details");
        }

        axios.post(`${API_URL}/videos`, {
            title: title,
            description: description,
        }).then((response) => {
            console.log(response.data);
        }).catch((error)=>{
            console.log(error)
        })
        props.history.push('/')
        setTimeout(() => {
            swal({title: "Good job!", text: "You published the video sucessfully", icon: "success"});
        }, 1000);
    }

    // const isFormValid = () => {
    //     const title=formInput.current.title.value;
    //     const description=formInput.current.description.value;
    //     if (!title || !description) {
    //         return alert("Fill in more details");
    //     } if (title.length < 6 && description.length<6) {
    //         return alert("Fill in more details");
    //     }
    // }
    

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
                        <form ref={formInput}
                            className="upload__form">
                            <div className="upload__titlebox">
                                <label htmlFor="title" className="upload__title">TITLE YOUR VIDEO</label><br/>
                                <input
                                    type="text"
                                    className="upload__inputbox"
                                    name="title"
                                    placeholder="Add a title to your video"
                                    required/>

                            </div>
                            <div className="upload__description">
                                <label htmlFor="textarea" className="upload__title">ADD A VIDEO DESCRIPTION</label>
                                <textarea 
                                    name="description"
                                    className="upload__videodescription"
                                    placeholder="Add a description to your video"
                                    required></textarea>

                                <div className="upload__buttonbox">
                                    <button id="cancel" type="reset" className="upload__cancel">CANCEL</button>
                                    <div className="upload__publishbox">
                                        <button onClick={publishEvent} type="button" className="upload__publish">PUBLISH</button>
                                    </div>

                                </div>
                            </div>
                        </form>
                    </section>
                </div>
            </section>
        )
    }

