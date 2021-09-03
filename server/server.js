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

app.use('/', videoRoutes);


app.listen(PORT,()=>{
    console.log("Server is running fine")
})
