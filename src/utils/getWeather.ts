import axios from "axios";
import {openWeatherToken} from "./tokens";

type getWeatherType = (lat: number, lon: number) => (Promise<string | void>);

const getWeather: getWeatherType = async (lat: number, lon: number) => {
  // const openWeatherToken: string | undefined = process.env.OPENWEATHER_TOKEN;

  const urlByCoordinates = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${openWeatherToken}&units=metric`;
  // const urlByCoordinates = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiToken}&units=metric`;
  const response = await axios.get(urlByCoordinates).catch(() => {
    error: 'An error has occurred when fetching the forecast.';
  });
  if (response) {
    const temperature: string = response.data.main.temp;
    return temperature;
  }
};

export default getWeather;