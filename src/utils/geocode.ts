import axios from 'axios';
import { GeocodeAPIType } from './support/apiTypes';
// import { geocodeToken } from './tokens';

type geocodeType = (
  address: string
) => Promise<{
  placeName: string;
  center: {
    lat: number;
    lon: number;
  };
}[] | {error: string}>;

const geocode: geocodeType = async (address) => {
  const geocodeToken: string | undefined = process.env.GEOCODE_TOKEN;

  const mapBoxUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=${geocodeToken}&limit=10&types=country,region,postcode,district,place,locality`;

  try {
    const response = await axios.get<GeocodeAPIType>(mapBoxUrl);
    const geocodeData = response.data.features.map((element) => {
      return {
        placeName: element.place_name,
        center: { lat: element.center[1], lon: element.center[0] },
      };
    });
    
    return geocodeData;
  } catch (error){
    if (axios.isAxiosError(error) && error.response){
      if (error.response.status === 429){
        return {error: 'Error: Out of API calls! Try again at the beggining of the next month or contact the development team.'}
      } else {
        return {error: 'Error: Geocode service not responding. Try again later or, if the problem persists, contact the development team.'}
      }
    } else {
      return {error: 'Error: Geocode service not responding. Try again later.'}
    }
  }
};

export default geocode;
