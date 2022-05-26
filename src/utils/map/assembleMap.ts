import { createCanvas, loadImage } from 'canvas';

import calculateCoordinates from './calculateCoordinates';
import {geocodeToken, openWeatherToken} from '../tokens';

const assembleMap = async (lat: number, lon: number, zoom: number, mapType: string) => {
  // const geocodeToken: string | undefined = process.env.GEOCODE_TOKEN;
  // const openWeatherToken: string | undefined = process.env.OPENWEATHER_TOKEN;

  const height = 512;
  const width = 512;
  const canvas = createCanvas(height, width);
  const context = canvas.getContext('2d');
  const canvas2 = createCanvas(height, width);
  const context2 = canvas2.getContext('2d');
  
  const [tilesCoordinates, offsetCoordinates] = calculateCoordinates(lat, lon, zoom);
  const xLow = tilesCoordinates[0][0] < tilesCoordinates[3][0] ? tilesCoordinates[0][0] : tilesCoordinates[3][0];
  const xHigh = tilesCoordinates[0][0] > tilesCoordinates[3][0] ? tilesCoordinates[0][0] : tilesCoordinates[3][0];
  const yLow = tilesCoordinates[0][1] < tilesCoordinates[3][1] ? tilesCoordinates[0][1] : tilesCoordinates[3][1];
  const yHigh = tilesCoordinates[0][1] > tilesCoordinates[3][1] ? tilesCoordinates[0][1] : tilesCoordinates[3][1];

  const tileOffset = [tilesCoordinates[0][0] === xLow ? width : 0, tilesCoordinates[0][1] === yLow ? height : 0];

  const xOffset = tileOffset[0] - offsetCoordinates[0];
  const yOffset = tileOffset[1] - offsetCoordinates[1];

  const mainImage = await loadImage(`https://api.mapbox.com/styles/v1/mapbox/light-v10/static/${lon},${lat},${zoom}/512x512?access_token=${geocodeToken}`);
  const topLeftImage = await loadImage(`https://tile.openweathermap.org/map/${mapType}/${zoom}/${xLow}/${yLow}.png?appid=${openWeatherToken}`);
  const topRightImage = await loadImage(`https://tile.openweathermap.org/map/${mapType}/${zoom}/${xHigh}/${yLow}.png?appid=${openWeatherToken}`);
  const bottomLeftImage = await loadImage(`https://tile.openweathermap.org/map/${mapType}/${zoom}/${xLow}/${yHigh}.png?appid=${openWeatherToken}`);
  const bottomRightImage = await loadImage(`https://tile.openweathermap.org/map/${mapType}/${zoom}/${xHigh}/${yHigh}.png?appid=${openWeatherToken}`);

  context.drawImage(mainImage,0, 0, width, height);
  context2.drawImage(topLeftImage, -width/2 + xOffset, -height/2 + yOffset, width, height);
  context2.drawImage(topRightImage,width/2 + xOffset, -height/2 + yOffset, width, height);
  context2.drawImage(bottomLeftImage, -width/2 + xOffset, height/2 + yOffset, width, height);
  context2.drawImage(bottomRightImage,width/2 + xOffset, height/2 + yOffset, width, height);
  
  const imageData = context2.getImageData(0, 0, width, height);
  
  if (mapType === 'clouds_new'){
    for (let i=0; i < imageData.data.length; i +=4) {
      imageData.data[i] = 255 - imageData.data[i];
      imageData.data[i+1] = 255 - imageData.data[i+1];
      imageData.data[i+2] = 255 - imageData.data[i+2];
    }
  }

  context2.putImageData(imageData, 0, 0);
  context.drawImage(canvas2, 0, 0);
  
  const buffer = canvas.toBuffer('image/png');
  return buffer;
};

export default assembleMap;
