const axios = require('axios').default;
// const tokens = require('./tokens');

const getWeather = async (lat, lon) => {
  // const apiToken = tokens.openWeatherToken;
  const apiToken = process.env.OPENWEATHER_TOKEN;

  const urlByCoordinates = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiToken}&units=metric`;
  // const urlByCoordinates = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiToken}&units=metric`;
  const response = await axios.get(urlByCoordinates).catch((error) => {
    error: 'An error has occurred when fetching the forecast.';
  });
  const temperature = response.data.main.temp;

  return temperature;
};

module.exports = getWeather;
