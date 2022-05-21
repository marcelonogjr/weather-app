export interface ChildrenProps {
  children: React.ReactNode;
}

export interface DefaultWeatherStatusType {
  address: null | string;
  isReady: boolean;
  dataIsReady: {
    infoIsReady: boolean;
    mapIsReady: boolean;
  };
}

export interface StatusIsReadyType {
  infoIsReady?: boolean;
  mapIsReady?: boolean;
}

interface actionReducerType {
  type: string;
  newAddress: string;
  dataIsReady: StatusIsReadyType;
}

export type ReducerType = (
  state: DefaultWeatherStatusType,
  action: actionReducerType
) => DefaultWeatherStatusType;

type WeatherContextType = {
  address: string | null;
  changeAddress: (newAddress: string) => void;
  isReady: boolean;
  statusIsReady: (object: StatusIsReadyType) => void;
};

export default WeatherContextType;
