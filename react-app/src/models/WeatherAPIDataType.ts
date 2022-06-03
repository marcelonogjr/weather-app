interface WeatherAPIDataType {
  weather: {
    current: CurrentAPIDataType;
    hourly: object;
    daily: object;
  };
  location: {
    city: string;
    state: string;
    country: string;
  };
}

export interface CurrentAPIDataType {
  dt: number;
  sunrise: number;
  sunset: number;
  temp: number;
  feels_like: number;
  pressure: number;
  humidity: number;
  dew_point: number;
  uvi: number;
  clouds: number;
  visibility: number;
  wind_speed: number;
  wind_deg: number;
  weather: [
    {
      id: number;
      main: string;
      description: string;
      icon: string;
    }
  ]
}

export default WeatherAPIDataType;