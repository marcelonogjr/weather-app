import React from "react";

import WeatherContextType, {NewLocationType, NewUnitsType, InErrorType} from '../models/WeatherContextType';

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
  inError: {errorStatus: false, errorMessage: ''},
  changeInError: (isError: InErrorType) => {},
});

export default WeatherContext;