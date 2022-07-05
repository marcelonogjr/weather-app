import React from "react";

import WeatherContextType, {NewLocationType, NewUnitsType} from '../models/WeatherContextType';

const WeatherContext = React.createContext<WeatherContextType>({
  address: null,
  changeLocation: (newALocation: NewLocationType) => {},
  lat: null,
  lon: null,
  units: 'imperial',
  changeUnits: (newUnits: NewUnitsType) => {},
  isReady: false,
  dataIsReady: {
    infoIsReady: false,
    mapIsReady: false,
  },
  statusIsReady: (someObject: {}) => {},
});

export default WeatherContext;