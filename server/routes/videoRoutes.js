const express = require ('express');
const router = express.Router();
const fs = require('fs');
const uuid= require('uuid')

const videoFilePath = './data/videoDetails.json';


const readVideos = () => {
  const fileContent = fs.readFileSync(videoFilePath);
  const parsedContent = JSON.parse(fileContent);
  return parsedContent;
}

// GET all videos endpoint
router.get('/videos', (_req, res) => {
  const videos=readVideos();
  const videoList=videos.map(video=>{
    return{
      id: video.id,
      title: video.id,
      channel: video.channel,
      image: video.image,    
    }
  })
  res.json(videoList)
});

//GET request for selected video id
router.get('/videos/:id', (_req, res) => {
  const foundVideos= videos.find(video=> video.id === _req.params.id)
  if (!foundVideos){
    res.status(404).json("Page Not Found")
  }else{
    res.json(foundVideos);
  }
});

//POST request for posting new videos
router.post('/videos', (req, res) => {

  const newVideo={
    id: uuid(),
    title: req.body.title,
    channel: req.body.channel,
    image: req.body.image,
    description: req.body.description,
    views: 1500,
    likes: 1200,
    timestamp: Date.now,
    comments:[]
  }
  if(!newVideo.title || !newVideo.description){
    return res.status(400).send("Please fill in details")
  }
  videos.push(newVideo);
  fs.writeFileSync(videoFilePath, JSON.stringify(videoList));
  res.json(newVideo.id);
});

module.exports = router;