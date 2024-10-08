import axios from 'axios';
import { openWeatherToken } from './tokens';
import {
  GetWeatherAPIType,
  GetWeatherReturnType,
} from './support/apiTypes';

type GetWeatherType = (
  lat: number,
  lon: number
) => Promise<GetWeatherReturnType | {error: string}>;

const getWeather: GetWeatherType = async (lat: number, lon: number) => {
  const urlByCoordinates = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${openWeatherToken}&units=imperial`;
  try {
    const response = await axios.get<GetWeatherAPIType>(urlByCoordinates);
    const newCurrentDT =
      response.data.current.dt + response.data.timezone_offset;
    const newCurrentSunrise =
      response.data.current.sunrise + response.data.timezone_offset;
    const newCurrentSunset =
      response.data.current.sunset + response.data.timezone_offset;

    const current = {
      ...response.data.current,
      dt: newCurrentDT,
      sunrise: newCurrentSunrise,
      sunset: newCurrentSunset,
    };

    const hourly = response.data.hourly.map((element) => {
      return {
        dt: element.dt + response.data.timezone_offset,
        temp: element.temp,
        humidity: element.humidity,
        uv: element.uvi,
        weather: element.weather,
        pop: element.pop,
      };
    });

    const daily = response.data.daily.map((element) => {
      return {
        dt: element.dt + response.data.timezone_offset,
        temp: {
          min: element.temp.min,
          max: element.temp.max,
        },
        humidity: element.humidity,
        uv: element.uvi,
        weather: element.weather,
        pop: element.pop,
      };
    });

    const weather = { current, hourly, daily };
    return weather;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      if (error.response.status === 429) {
        return {error: 'Error: Out of API calls! Try again at the beggining of the next month or contact the development team.'};
      } else {
        return {error: 'Error: Weather service not responding. Try again later or, if the problem persists, contact the development team.'};
      }
    } else {
      return {error: 'Error: Weather service not responding. Try again later.'};
    }
  }
};

export default getWeather;
