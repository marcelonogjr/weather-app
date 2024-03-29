type CalculateCoordinatesType = (lat: number, lon: number, zoom: number) => [number[][], number[]];

const calculateCoordinates: CalculateCoordinatesType = (lat, lon, zoom) => {

  const xHigh = Math.floor((lon+180)/360*Math.pow(2,zoom + 1));
  const yHigh = Math.floor((1-Math.log(Math.tan(lat*Math.PI/180) + 1/Math.cos(lat*Math.PI/180))/Math.PI)/2 *Math.pow(2,zoom + 1));

  const xRelative = xHigh % 2;
  const yRelative = yHigh % 2;

  const xReal = Math.floor(xHigh / 2);
  const yReal = Math.floor(yHigh / 2);

  const xModified = xRelative === 0 ? xReal - 1 : xReal + 1; 
  const yModified = yRelative === 0 ? yReal - 1 : yReal + 1; 

  const tilesCoordinates = [
    [xReal, yReal],
    [xReal, yModified],
    [xModified, yReal],
    [xModified, yModified],
  ];

  const degreeToRad = (lat: number) => lat * Math.PI / 180;
  
  const xPixels = (lon: number) => { return ((512 / (2*Math.PI) * 2 ** zoom * (lon + Math.PI)) % 512)};
  const yPixels = (lat: number) => { return ((512 / (2*Math.PI) * 2 ** zoom * (Math.PI - Math.log(Math.tan(Math.PI / 4 + lat / 2)))) % 512)};

  const offset = [xPixels(degreeToRad(lon)), yPixels(degreeToRad(lat))];
  
  return [tilesCoordinates, offset];
};

export default calculateCoordinates;
