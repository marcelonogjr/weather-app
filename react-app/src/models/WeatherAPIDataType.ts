export type GeocodeAPIDataType = {
  placeName: string;
  center: {
    lat: number;
    lon: number;
  }
}[];

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
  ];
};

export type HourlyAPIDataType = {
  dt: number;
  temp: number;
  humidity: number;
  uv: number;
  weather: [
    {
      id: number;
      main: string;
      description: string;
      icon: string;
    }
  ];
  pop: number;
}[];

export type DailyAPIDataType = {
  dt: number;
  temp: {
    min: number;
    max: number;
  };
  humidity: number;
  weather: [
    {
      id: number;
      main: string;
      description: string;
      icon: string;
    }
  ];
  pop: number;
}[];

interface WeatherAPIDataType {
  current: CurrentAPIDataType;
  hourly: HourlyAPIDataType;
  daily: DailyAPIDataType;
}

export default WeatherAPIDataType;
