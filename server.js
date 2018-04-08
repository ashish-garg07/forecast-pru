/**
 * Created by Ashish on 4/8/18.
 */
const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
let { join } = require('path');
let request = require('request');
const app = express();
app.use(express.static(path.join(__dirname, 'build')));

if (process.env.NODE_ENV !== 'production') {
  let dotenv = require('dotenv');
  dotenv.load();

  dotenv.config({ path: join(__dirname, '../.env') });
}

let apiKey = process.env.WEATHER_API_KEY;
let url = process.env.WEATHER_URL+'?q=LONDON&appid='+apiKey+'&units=metric';

app.get('/forecast', function (req, res) {
  request(url, function (err, response, body) {
    if(err){
      console.log('error:', err);
    } else {
      let weather = JSON.parse(body);

      let message = `It's ${weather.list[0].main.temp} degrees in
               ${weather.city.name}!`;
      console.log(message);
      res.send({weather:message});
    }
  });
});



app.get('/ping', function (req, res) {
  return res.send('pong');
});

// app.get('/', function (req, res) {
//   res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });

app.listen(process.env.PORT || 8080);