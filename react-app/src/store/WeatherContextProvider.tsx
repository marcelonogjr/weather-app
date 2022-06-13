import React, { useCallback, useReducer } from 'react';

import WeatherContext from './weather-context';
import {
  StatusIsReadyType,
  ChildrenProps,
  DefaultWeatherStatusType,
  ReducerType,
  NewLocationType,
} from '../models/WeatherContextType';

const defaultWeatherStatus: DefaultWeatherStatusType = {
  address: null,
  lat: null,
  lon: null,
  isReady: false,
  dataIsReady: {
    infoIsReady: false,
    mapIsReady: false,
  },
};

const weatherReducer: ReducerType = (state, action) => {
  if (action.type === 'CHANGE_ADDRESS') {
    const location = action.location;
    return {
      address: location.address,
      lat: location.lat,
      lon: location.lon,
      isReady: false,
      dataIsReady: {
        infoIsReady: false,
        mapIsReady: false,
      },
    };
  }

  if (action.type === 'CHANGE_STATUS') {
    const actionDataIsReady = action.dataIsReady;

    const newDataIsReady = {
      ...state.dataIsReady,
      ...actionDataIsReady,
    };

    if (newDataIsReady.infoIsReady && newDataIsReady.mapIsReady) {
      return {
        ...state,
        isReady: true,
        dataIsReady: {
          ...newDataIsReady,
        },
      };
    }

    return {
      ...state,
      dataIsReady: {
        ...state.dataIsReady,
        ...actionDataIsReady,
      },
    };
  }

  return defaultWeatherStatus;
};

const WeatherContextProvider: React.FC<ChildrenProps> = (props) => {
  const [weatherState, dispatchWeatherAction] = useReducer(
    weatherReducer,
    defaultWeatherStatus
  );

  const changeLocationHandler = useCallback((location: NewLocationType) => {
    dispatchWeatherAction({
      type: 'CHANGE_ADDRESS',
      location: {
        address: location.address,
        lat: location.lat,
        lon: location.lon,
      },
      dataIsReady: {
        infoIsReady: false,
        mapIsReady: false,
      },
    });
  }, []);

  const changeStatusHandler = useCallback((newStatus: StatusIsReadyType) => {
    dispatchWeatherAction({
      type: 'CHANGE_STATUS',
      dataIsReady: newStatus,
      location: {
        address: '',
        lat: 0,
        lon: 0,
      }, //figure out a better logic later...
    });
  }, []);

  const contextValue = {
    address: weatherState.address,
    changeLocation: changeLocationHandler,
    lat: weatherState.lat,
    lon: weatherState.lon,
    isReady: weatherState.isReady,
    statusIsReady: changeStatusHandler,
  };

  return (
    <WeatherContext.Provider value={contextValue}>
      {props.children}
    </WeatherContext.Provider>
  );
};

export default WeatherContextProvider;
