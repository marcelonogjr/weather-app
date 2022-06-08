import axios from "axios";
import {openWeatherToken} from "./tokens";

type getWeatherType = (lat: number, lon: number) => (Promise<unknown | void>);

const getWeather: getWeatherType = async (lat: number, lon: number) => {
  // const openWeatherToken: string | undefined = process.env.OPENWEATHER_TOKEN;

  const urlByCoordinates = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${openWeatherToken}&units=metric`;
  const response = await axios.get(urlByCoordinates);
  if (response) {
    const newCurrentDT = (response.data.current.dt + response.data.timezone_offset);
    const newCurrentSunrise = (response.data.current.sunrise + response.data.timezone_offset);
    const newCurrentSunset = (response.data.current.sunset + response.data.timezone_offset);    
    
    const current = {...response.data.current, dt: newCurrentDT, sunrise: newCurrentSunrise, sunset: newCurrentSunset};
    const hourly =  response.data.hourly.map((element: any) => {
      return {
        dt: element.dt + response.data.timezone_offset,
        temp: element.temp,
        humidity: element.humidity,
        uv: element.uvi,
        weather: element.weather,
        pop: element.pop,
      }
    });
    const daily =  response.data.daily.map((element: any) => {
      return {
        dt: element.dt + response.data.timezone_offset,
        temp: {
          min: element.temp.min,
          max: element.temp.max
        },
        humidity: element.humidity,
        weather: element.weather,
        pop: element.pop,
      }
    });
    
    const weather = {current, hourly, daily};
    return weather;
  }
};

export default getWeather;