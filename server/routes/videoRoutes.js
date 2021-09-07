const express = require ('express');
const router = express.Router();
const fs = require('fs');
const uniqid =require('uniqid')

const videoFilePath = './data/videoDetails.json';


const readVideos = () => {
  const fileContent = fs.readFileSync(videoFilePath);
  const parsedContent = JSON.parse(fileContent);
  return parsedContent;
}

// GET all videos endpoint
router.get('/', (_req, res) => {
  try {
    const videoData = readVideos();
    return res.status(200).json(videoData);
  } catch(err) {
    return res.status(500).json({ error: "File cannot be read." }) 
  }
});

//GET request for selected video id
router.get('/:id', (req, res) => {
  const videos=readVideos();
  const foundVideos= videos.find(video=> video.id === req.params.id)
  console.log(foundVideos)
  if (!foundVideos){
    res.status(404).json("Page Not Found")
  }
    res.json(foundVideos);
  });

//POST request for posting new videos
router.post('/', (req, res) => {
  const publishVideo=readVideos();
  const newVideo={
    id: uniqid(),
    title: req.body.title,
    channel: "Lorem",
    image: "http://localhost:8080/images/image9.jpg",
    description: req.body.description,
    views: "1500",
    likes: "1200",
    timestamp: Date.now(),
    comments:[],
  }
  publishVideo.push(newVideo);
  fs.writeFileSync(videoFilePath, JSON.stringify(publishVideo));
  return res.status(201).json(newVideo);
});

module.exports = router;