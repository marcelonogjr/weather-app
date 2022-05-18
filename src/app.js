const path = require('path');
const express = require('express');
const geocode = require('./utils/geocode');
const getWeather = require('./utils/getWeather');
const assembleMap = require('./utils/map/assembleMap');

const app = express();
const port = process.env.PORT || 5000;

// Define paths for Express config
const reactPath = path.join(__dirname, '../react-app/build');

// Setup static directory to serve
app.use(express.static(reactPath));

app.get('/api/weather', async (req, res) => {
  res.set('Access-Control-Allow-Origin', 'http://localhost:3000');

  if (!req.query.address) {
    return res.send({
      error: 'ERROR: something went wrong!',
    });
  }

  const [lat, lon, placeName] = await geocode(req.query.address);

  if (lat & lon) {
    const temperature = await getWeather(lat, lon);
    const finalResponse = {
      temperature,
      location: placeName,
    };

    res.send(finalResponse);
  }
});

app.get('/api/weather-map', async (req, res) => {
  res.set('Access-Control-Allow-Origin', 'http://localhost:3000');

  if (!req.query.address || !req.query.zoom || !req.query.map__type) {
    return res.send({
      error: 'ERROR: something went wrong!',
    });
  }

  const [lat, lon] = await geocode(req.query.address);
  const zoom = +req.query.zoom;
  const mapType = req.query.map__type;
  // console.log(lat, lon, zoom, mapType);

  if (lat && lon && zoom && mapType) {
    const response = await assembleMap(lat, lon, zoom);
    const imgData = await Buffer.from(response, 'base64');
    if(imgData){
      res.writeHead(200, {
        'Content-Type': 'image/png',
        'Content-Length': imgData.length
      });
      res.end(imgData); 
    };
  };
});

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../react-app/build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is up on port ${port}.`);
});
