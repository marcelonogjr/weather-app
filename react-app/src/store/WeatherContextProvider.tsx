import React, { useCallback, useReducer } from 'react';

import WeatherContext from './weather-context';
import {
  StatusIsReadyType,
  ChildrenProps,
  DefaultWeatherStatusType,
  ReducerType,
} from '../models/WeatherContextType';

const defaultWeatherStatus: DefaultWeatherStatusType = {
  address: null,
  isReady: false,
  dataIsReady: {
    infoIsReady: false,
    mapIsReady: false,
  },
};

const weatherReducer: ReducerType = (state, action) => {
  if (action.type === 'CHANGE_ADDRESS') {
    const newAddress = action.newAddress;
    return {
      address: newAddress,
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

  const changeAddressHandler = useCallback((newAddress: string) => {
    dispatchWeatherAction({
      type: 'CHANGE_ADDRESS',
      newAddress,
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
      newAddress: 'this is useless code, but can\' get it out for now...', //figure out a better logic later...
    });
  }, []);

  const contextValue = {
    address: weatherState.address,
    changeAddress: changeAddressHandler,
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
