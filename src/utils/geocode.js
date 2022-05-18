const axios = require('axios').default;
const tokens = require('./tokens');

const geocode = async (address) => {
  const apiToken = tokens.geocodeToken;
  // const apiToken = process.env.GEOCODE_TOKEN;

  const mapBoxUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=${apiToken}&limit=1`;

  const response = await axios.get(mapBoxUrl).catch(() => {
    error: 'An error has occurred!\nLocation not found.';
  });
  const [lon, lat] = await response.data.features[0].center;
  const placeName = response.data.features[0].place_name;
  // console.log([lat, lon, placeName]);

  return [lat, lon, placeName];
};

module.exports = geocode;
