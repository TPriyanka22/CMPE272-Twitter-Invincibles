/*Akhil and Sanketh worked on the backend code to hit the Twitter API and the get required data*/

var express = require('express');
var cors = require('cors');
var app = express();

const corsDetails = require('./config/corsDetails');
app.use(cors(corsDetails))

var Twit = require('twit');
const twitterCreds = require('./config/twitterCreds');
var tweetipie = new Twit(twitterCreds);

app.get('/search', (req, res) => {
  console.log("ITS ME")
  console.log(req.headers.query)
  var request_query = req.headers.query;
  tweetipie.get('search/tweets', { q: request_query, count: 10 })
      .then(results => 
        {
          return res.json(results)
        })
      .catch(err => 
        {
          console.log(err);
          return res.status(400).json("Error: " + err)
        });
});

//create tweet
app.get('/tweet', (req, res) => {
  var request_text = req.headers.text;
  tweetipie.post('statuses/update', { status: request_text })
      .then(results => 
        {
          return res.json(results)
        })
      .catch(err => 
        {
          return res.status(400).json("Error: " + err)
        });
});

//delete api
app.get('/delete', (req, res) => {
  var request_id = req.headers.id;
  tweetipie.post('statuses/destroy/:id', { id: request_id })
      .then(results => 
        {
          return res.json(results)
        })
      .catch(err =>
        {
          return res.status(400).json("Error: " + err)
        });
});

app.listen(8080, () => { console.log("Server has started on port 8080") });
