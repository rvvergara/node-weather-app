const request = require('request');

const url = 'https://api.darksky.net/forecast/11ccf9b69a2309d3b0c033170e50db89/14.394,120.976?units=si';

// request({ url, json: true }, (err, res) => {
//   if (err) {
//     console.log('Error', err);
//   } else {
//     const { temperature, precipProbability } = res.body.currently;
//     console.log(res.body.daily.data[0].summary, `It is currently ${temperature} degrees out. There is a ${Math.round(precipProbability * 100, 2)}% chance of rain`);
//   }
// });

const mapUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Bacoor.json?access_token=pk.eyJ1IjoicnZ2ZXJnYXJhIiwiYSI6ImNrMmE2cW9iNTE3ZHIzY3BiYTVwaG5rYWkifQ.254LqRf-sIBpRaAJ-VDlbA&limit=1';

request({ url: mapUrl, json: true }, (err, res) => {
  if (err) {
    console.log({ error: err });
  } else {
    const { center } = res.body.features[0];
    const long = center[0];
    const lat = center[1];
    console.log(`Bacoor: Long: ${long}, Lat: ${lat}`);
  }
});