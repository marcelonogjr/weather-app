import axios from 'axios';
// import {geocodeToken} from './tokens';

type geocodeType = (address: string) => (Promise<[number, number, string] | void>);

const geocode: geocodeType = async (address: string) => {
  const geocodeToken: string | undefined = process.env.GEOCODE_TOKEN;

  const mapBoxUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=${geocodeToken}&limit=1`;

  const response = await axios.get(mapBoxUrl).catch(() => {
    error: 'An error has occurred!\nLocation not found.';
  });
  if (response) {
    const [lon, lat]: number[] = await response.data.features[0].center;
    const placeName: string = response.data.features[0].place_name;
    return [lat, lon, placeName];
  }
  // console.log([lat, lon, placeName]);

  return response;
};

export default geocode;