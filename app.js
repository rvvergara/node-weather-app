const request = require('request');

const url = 'https://api.darksky.net/forecast/11ccf9b69a2309d3b0c033170e50db89/14.394,120.976';

request({ url }, (err, res) => {
  if (err) {
    console.log('Error', err);
  } else {
    const data = JSON.parse(res.body);
    console.log(data.currently);
  }
});