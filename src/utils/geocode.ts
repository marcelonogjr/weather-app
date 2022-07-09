import axios from 'axios';
// import { geocodeToken } from './tokens';
import { GeocodeAPIType } from './support/apiTypes';

type geocodeType = (
  address: string
) => Promise<{
  placeName: string;
  center: {
    lat: number;
    lon: number;
  };
}[] | void>;

const geocode: geocodeType = async (address: string) => {
  const geocodeToken: string | undefined = process.env.GEOCODE_TOKEN;

  const mapBoxUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=${geocodeToken}&limit=10&types=country,region,postcode,district,place,locality`;

  const response = await axios.get<GeocodeAPIType>(mapBoxUrl);

  const geocodeData = response.data.features.map((element) => {
    return {
      placeName: element.place_name,
      center: { lat: element.center[1], lon: element.center[0] },
    };
  });
  return geocodeData;
};

export default geocode;
