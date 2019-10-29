const foreCast = require('./utils/forecast');
const geoCode = require('./utils/geocode');

const city = process.argv[2];

if (!city) {
  console.log('Please type a city name');
} else {
  geoCode(city, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      const { lat, long, location } = data;

      foreCast(lat, long, (err, data) => {
        if (err) {
          console.log(err);
        } else {
          const { summary, temperature, precipProbability } = data;

          console.log(`Forecast for ${location}: ${summary} It is currently ${temperature} degrees celsius and we have ${Math.round(precipProbability * 100, 2)}% chance of rain.`);
        }
      });
    }
  });
}
