const router = express.Router();
const express= require('express');
const fs= require('fs');
const uuid= require('uuid');
const videoData= './data/videoDetails.json';


const readVideo = () => {
    const fileContent = fs.readFileSync(videoData);
    const parsedContent = JSON.parse(fileContent);
    return parsedContent;
  }

router.get('/:id/comments',(req,res)=>{
    const videos= readVideo();
    const selectedVideo=videos.find((video)=>video.id===req.body.id);
    res.json(selectedVideo.comments);
})  

router.post("/:id/comments",(req,res)=>{
    const videos=readVideo();
    const currentVideo=videos.find((video)=> video.id===req.params.id);
    let newComment={
        id=uuid(),
        name:req.body.name,
        comment:req.body.comment,
        likes:0,
        timestamp:Date.now()
    }
currentVideo.comments.push(newComment);
})

