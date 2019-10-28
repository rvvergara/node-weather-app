const foreCast = require('./utils/forecast');
const geoCode = require('./utils/geocode');

let long;
let lat;

geoCode('Bacoor', (err, data) => {
  if (err) {
    console.log(err);
  } else {
    long = data.long;
    lat = data.lat;

    foreCast(lat, long, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        const { summary, temperature, precipProbability } = data;

        console.log(`${summary} It is currently ${temperature} degrees celsius and we have ${Math.round(precipProbability * 100, 2)}% chance of rain.`);
      }
    });
  }
});
