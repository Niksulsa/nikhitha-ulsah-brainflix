const express = require('express');
const app = express();
const { uuid } = require('uuidv4');
const PORT = 8080;
const videoRoutes = require('./routes/videoRoutes.js');
const cors= require('cors');


app.use(cors());

app.use((_req, _res, next) => {
    console.log('Incoming Request');
    next();
});
//app.use(express.static('assets'));

app.use(express.json());

app.use('/videos', videoRoutes);

app.route('/videos/:videosId').get((_req, res) => {
  const foundVideos= videos.find(video=> videoId ===parse(req.params.video.id))
  if (!foundVideos){
    res.status(404).send("Page Not Found")
  }
  res.send(foundVideos)
});;

app.listen(PORT,()=>{
    console.log("Server is running fine")
})
