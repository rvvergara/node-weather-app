const request = require('request');

const foreCast = (lat, long, callback) => {
  const url = `https://api.darksky.net/forecast/11ccf9b69a2309d3b0c033170e50db89/${lat},${long}?units=si`;

  request({ url, json: true }, (err, res) => {
    if (err) {
      callback(err);
    } else {
      const { temperature, precipProbability } = res.body.currently;
      callback(err, { temperature, precipProbability, summary: res.body.daily.summary });
    }
  });
};

module.exports = foreCast;