import React from "react";

import WeatherContextType from '../models/WeatherContextType';

const WeatherContext = React.createContext<WeatherContextType>({
  address: null,
  changeAddress: (newAddress: string | null) => {},
  isReady: false,
  statusIsReady: ({}) => {}
});

export default WeatherContext;