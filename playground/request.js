const https = require('https');

const { request } = https;

const url = 'https://api.darksky.net/forecast/11ccf9b69a2309d3b0c033170e50db89/40,-75?units=si';

// const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Bacoor.json?access_token=pk.eyJ1IjoicnZ2ZXJnYXJhIiwiYSI6ImNrMmE2cW9iNTE3ZHIzY3BiYTVwaG5rYWkifQ.254LqRf-sIBpRaAJ-VDlbA&limit=1';

const req = request(url, (res) => {
  let buffer = '';
  res.on('data', (data) => {
    buffer += data.toString();
  });

  res.on('end', () => {
    console.log(JSON.parse(buffer).currently);
  });
});

req.on('error', (err) => {
  console.log('ERROR: ', err);
});

req.end();