import express, {Application, Request, Response} from "express";
import path from "path";

import geocode from "./utils/geocode";
import getWeather from "./utils/getWeather";
import assembleMap from "./utils/map/assembleMap";
import {zoomConversion} from "./utils/support/inputConversion";

const app: Application = express();
const port = process.env.PORT || 5000;

// Define paths for Express config
const reactPath = path.join(__dirname, '../react-app/build');

// Setup static directory to serve
app.use(express.static(reactPath));

app.get('/api/weather', async (req:Request, res:Response) => {
  res.set('Access-Control-Allow-Origin', 'http://localhost:3000');

  if (!req.query.address) {
    return res.send({
      error: 'ERROR: something went wrong!',
    });
  }

  if (typeof req.query.address === 'string') {

    const geocodeResponse = await geocode(req.query.address);
  
    if (geocodeResponse) {
      const [lat, lon, placeName] = geocodeResponse;
  
      const temperature = await getWeather(lat, lon);

      if (temperature) {
        const finalResponse = {
          temperature,
          location: placeName,
        };
    
        res.send(finalResponse);
      }
    }
  }


});

app.get('/api/weather-map', async (req:Request, res:Response) => {
  res.set('Access-Control-Allow-Origin', 'http://localhost:3000');

  if (!req.query.address || !req.query.zoom || !req.query.map__type) {
    return res.send({
      error: 'ERROR: something went wrong!',
    });
  }

  if (typeof req.query.address === 'string' && (req.query.zoom === 'small' || req.query.zoom === 'medium' || req.query.zoom === 'large') && typeof req.query.map__type === 'string') {
    const geocodeResponse = await geocode(req.query.address);

    if (geocodeResponse) {
      const [lat, lon] = geocodeResponse;
      const zoom = zoomConversion(req.query.zoom);
      // const mapType = req.query.map__type;
      // console.log(lat, lon, zoom, mapType);
    
      const response = await assembleMap(lat, lon, zoom);

      if(response){
        res.writeHead(200, {
          'Content-Type': 'image/png',
          'Content-Length': response.length
        });
        res.end(response); 
      };
    }
  }

});

app.get('/*', (req:Request, res:Response) => {
  res.sendFile(path.join(__dirname, '../react-app/build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is up on port ${port}.`);
});
