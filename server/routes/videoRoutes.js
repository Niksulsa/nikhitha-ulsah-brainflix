const express = require ('express');
const router = express.Router();
const fs = require('fs');
const { parse } = require('path');

//const uniqid = require('uniqid'); 

const videoFilePath = './data/videoDetails.json';

const readVideos = () => {
  const fileContent = fs.readFileSync(videoFilePath);
  const parsedContent = JSON.parse(fileContent);
  return parsedContent;
}

// GET all videos endpoint
router.get('/', (_req, res) => {
  try {
    const videoList = readVideos();
    return res.status(200).json(videoList);
  } catch(err) {
    return res.status(500).json({ error: "File cannot be read." }) 
  }
});

// for this endpoint to match, it needs to be '/notes/latest'
router.get('/videos', (_req, res) => {
  const videoDetails=video.map((video)=>{
    return {
      id: uuid(),
      title: video.id,
      channel: video.channel,
      image: video.image,
      description: video.description,
      views: video.views,
      likes: video.likes,
      duration: video.duration,
      video: video.video,
      timestamp: video.timestamp,
      comments:[]
    }
  })
  return res.status(200).json(videos)
});

router.get('videos/:videosId',(_req,res)=>{
  const foundVideos= videos.filter(video=> videoId ===parse(req.params.id))
  if (!foundVideos){
    res.status(404).send("Page Not Found").json(video);
  }
  res.send(foundVideos)
})

router.post('/videos', (req, res) => {
  console.log(req.body)

  videos.push({
    id: uuid(),
    title: "",
    channel: "",
    image: "",
    description: "",
    views: "",
    likes: "",
    duration: "",
    video: "",
    timestamp: Date.now,
    comments:[]
  });
  fs.writeFileSync(videoFilePath, JSON.stringify(videoList));
  res.json(videos);
});
/*
// POST a new video endpoint
router.post('POST/videos', (req, res) => {
  console.log('Request body object: ', req.body);

  // Create a new video object with unique ID
  const newVideo = {
    id: uniqid(),
    title: req.body.title,
    description: req.body.description
  }


  const videoList = readVideo();

  // Push new Video into videoList
  videoList.push(newVideo);

  fs.writeFileSync(videoFilePath, JSON.stringify(videoList));

 
  return res.status(201).json(newVideo);
});*/

// Finally, export the router for use in index.js
module.exports = router;