import axios from "axios";
import {openWeatherToken} from "./tokens";

type getWeatherType = (lat: number, lon: number) => (Promise<unknown | void>);

const getWeather: getWeatherType = async (lat: number, lon: number) => {
  // const openWeatherToken: string | undefined = process.env.OPENWEATHER_TOKEN;

  // const urlByCoordinates = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${openWeatherToken}&units=metric`;
  const urlByCoordinates = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${openWeatherToken}&units=metric`;
  const response = await axios.get(urlByCoordinates).catch(() => {
    error: 'An error has occurred when fetching the forecast.';
  });
  if (response) {
    const newDT = (response.data.current.dt + response.data.timezone_offset);
    const newSunrise = (response.data.current.sunrise + response.data.timezone_offset);
    const newSunset = (response.data.current.sunset + response.data.timezone_offset);
    
    const current = {...response.data.current, dt: newDT, sunrise: newSunrise, sunset: newSunset};
    const hourly =  response.data.hourly;
    const daily =  response.data.daily;
    
    const weather = {current, hourly, daily};
    return weather;
  }
};

export default getWeather;