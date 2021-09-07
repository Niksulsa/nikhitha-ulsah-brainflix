const express = require('express');
const app = express();
//const { uuid } = require('uuidv4');
const PORT = 8080;
const videoRoutes = require('./routes/videoRoutes.js');
const cors= require('cors');

app.use(express.json());
app.use(express.static("public"));
app.use(cors());


app.use((_req, _res, next) => {
    console.log('Incoming Request');
    next();
});

app.use('/videos', videoRoutes);


app.listen(PORT,()=>{
    console.log("Server working")
})
