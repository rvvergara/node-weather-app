const request = require('request');

const url = 'https://api.darksky.net/forecast/11ccf9b69a2309d3b0c033170e50db89/14.394,120.976?units=si';

request({ url, json: true }, (err, res) => {
  if (err) {
    console.log('Error', err);
  } else {
    const { temperature, precipProbability } = res.body.currently;
    console.log(res.body.daily.data[0].summary, `It is currently ${temperature} degrees out. There is a ${Math.round(precipProbability * 100, 2)}% chance of rain`);
  }
});