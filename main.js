const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const tweetFile = require('./favs.json');
const path = require('path');
const { nextTick } = require('process');

const app = express();
const port = 3000;

//--------- Begin: Performing Server Requests/Responses -----------//
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'index.html')));


app.get("/",function(req,res)
{
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/',(req, res) => {
    console.log(req.body.createTwee);
    
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, (req, res) => {
    console.log(`Listening on port ${port}`);
});#   O U - C S 3 2 0 3 - A s s i g n m e n t 2  
 