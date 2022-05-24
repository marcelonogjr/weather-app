import { createCanvas, loadImage } from 'canvas';

import calculateCoordinates from './calculateCoordinates';
import {geocodeToken, openWeatherToken} from '../tokens';

const assembleMap = async (lat: number, lon: number, zoom: number) => {
  // const geocodeToken: string | undefined = process.env.GEOCODE_TOKEN;
  // const openWeatherToken: string | undefined = process.env.OPENWEATHER_TOKEN;

  const height = 512;
  const width = 512;
  const canvas = createCanvas(height, width);
  const context = canvas.getContext('2d');
  
  const [tilesCoordinates, offsetCoordinates] = calculateCoordinates(lat, lon, zoom);
  const xLow = tilesCoordinates[0][0] < tilesCoordinates[3][0] ? tilesCoordinates[0][0] : tilesCoordinates[3][0];
  const xHigh = tilesCoordinates[0][0] > tilesCoordinates[3][0] ? tilesCoordinates[0][0] : tilesCoordinates[3][0];
  const yLow = tilesCoordinates[0][1] < tilesCoordinates[3][1] ? tilesCoordinates[0][1] : tilesCoordinates[3][1];
  const yHigh = tilesCoordinates[0][1] > tilesCoordinates[3][1] ? tilesCoordinates[0][1] : tilesCoordinates[3][1];

  const tileOffset = [tilesCoordinates[0][0] === xLow ? width : 0, tilesCoordinates[0][1] === yLow ? height : 0];

  const xOffset = tileOffset[0] - offsetCoordinates[0];
  const yOffset = tileOffset[1] - offsetCoordinates[1];

  // console.log(xOffset, yOffset);

  const mainImage = await loadImage(`https://api.mapbox.com/styles/v1/mapbox/light-v10/static/${lon},${lat},${zoom}/512x512?access_token=${geocodeToken}`);
  const topLeftImage = await loadImage(`https://tile.openweathermap.org/map/temp_new/${zoom}/${xLow}/${yLow}.png?appid=${openWeatherToken}`);
  const topRightImage = await loadImage(`https://tile.openweathermap.org/map/temp_new/${zoom}/${xHigh}/${yLow}.png?appid=${openWeatherToken}`);
  const bottomLeftImage = await loadImage(`https://tile.openweathermap.org/map/temp_new/${zoom}/${xLow}/${yHigh}.png?appid=${openWeatherToken}`);
  const bottomRightImage = await loadImage(`https://tile.openweathermap.org/map/temp_new/${zoom}/${xHigh}/${yHigh}.png?appid=${openWeatherToken}`);

  context.drawImage(mainImage,0, 0, width, height);
  // context.globalAlpha = 0.8;
  context.drawImage(topLeftImage, -width/2 + xOffset, -height/2 + yOffset, width, height);
  context.drawImage(topRightImage,width/2 + xOffset, -height/2 + yOffset, width, height);
  context.drawImage(bottomLeftImage, -width/2 + xOffset, height/2 + yOffset, width, height);
  context.drawImage(bottomRightImage,width/2 + xOffset, height/2 + yOffset, width, height);
  
  const buffer = canvas.toBuffer('image/png');
  return buffer;
};

export default assembleMap;
