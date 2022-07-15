import React, { useCallback, useReducer, useState } from 'react';

import WeatherContext from './weather-context';
import {
  StatusIsReadyType,
  ChildrenProps,
  DefaultWeatherStatusType,
  ReducerType,
  NewLocationType,
  NewUnitsType,
  InErrorType,
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

    if (state.isReady) {
      return {
        ...state,
        isReady: false,
        dataIsReady: {
          infoIsReady: false,
          mapIsReady: false,
        },
      };
    }

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
      isReady: false,
      dataIsReady: {
        ...state.dataIsReady,
        ...actionDataIsReady,
      },
    };
  }

  return defaultWeatherStatus;
};

const WeatherContextProvider: React.FC<ChildrenProps> = (props) => {
  const [currentUnits, setCurrentUnits] = useState<NewUnitsType>('imperial');
  const [isError, setIsError] = useState<InErrorType>({
    errorStatus: false,
    errorMessage: '',
  });
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

  const changeUnitsHandler = useCallback((newUnits: NewUnitsType) => {
    setCurrentUnits(newUnits);
  }, []);

  const changeInErrorHandler = useCallback((isError: InErrorType) => {
    setIsError({
      errorStatus: isError.errorStatus,
      errorMessage: isError.errorMessage,
    });
  }, []);

  const contextValue = {
    address: weatherState.address,
    changeLocation: changeLocationHandler,
    lat: weatherState.lat,
    lon: weatherState.lon,
    units: currentUnits,
    changeUnits: changeUnitsHandler,
    isReady: weatherState.isReady,
    dataIsReady: {
      infoIsReady: weatherState.dataIsReady.infoIsReady,
      mapIsReady: weatherState.dataIsReady.mapIsReady,
    },
    statusIsReady: changeStatusHandler,
    inError: isError,
    changeInError: changeInErrorHandler,
  };

  return (
    <WeatherContext.Provider value={contextValue}>
      {props.children}
    </WeatherContext.Provider>
  );
};

export default WeatherContextProvider;
