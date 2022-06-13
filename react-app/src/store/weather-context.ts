import React from "react";

import WeatherContextType, {NewLocationType} from '../models/WeatherContextType';

const WeatherContext = React.createContext<WeatherContextType>({
  address: null,
  changeLocation: (newALocation: NewLocationType) => {},
  lat: null,
  lon: null,
  isReady: false,
  statusIsReady: (someObject: {}) => {},
});

export default WeatherContext;