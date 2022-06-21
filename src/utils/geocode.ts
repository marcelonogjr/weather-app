import axios from 'axios';
// import { geocodeToken } from './tokens';

type geocodeType = (
  address: string
) => Promise<string[] | void>;

const geocode: geocodeType = async (address: string) => {
  const geocodeToken: string | undefined = process.env.GEOCODE_TOKEN;

  const mapBoxUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=${geocodeToken}&limit=10&types=country,region,postcode,district,place,locality`;

  const response = await axios.get(mapBoxUrl);
  if (response) {
    // const [lon, lat]: number[] = await response.data.features[0].center;
    // const placeName: string[] = response.data.features[0].place_name.split(', ');
    const geocodeData: string[] = response.data.features.map((element: any) => {
      return {
        placeName: element.place_name,
        center: { lat: element.center[1], lon: element.center[0] },
      };
    });
    return geocodeData;
  }

  return response;
};

export default geocode;
