export interface ChildrenProps {
  children: React.ReactNode;
};

export interface DefaultWeatherStatusType {
  address: string | null;
  lat: number | null;
  lon: number | null;
  isReady: boolean;
  dataIsReady: {
    infoIsReady: boolean;
    mapIsReady: boolean;
  };
};

export interface StatusIsReadyType {
  infoIsReady?: boolean;
  mapIsReady?: boolean;
};

export type NewLocationType = {
  address: string;
  lat: number;
  lon: number;
}

export type NewUnitsType = 'imperial' | 'metric';

interface ActionReducerType {
  type: string;
  location: NewLocationType;
  dataIsReady: StatusIsReadyType;
};

export type ReducerType = (
  state: DefaultWeatherStatusType,
  action: ActionReducerType
) => DefaultWeatherStatusType;

type WeatherContextType = {
  address: string | null;
  changeLocation: (newlocation: NewLocationType) => void;
  lat: number | null;
  lon: number | null;
  units: NewUnitsType;
  changeUnits: (newUnits: NewUnitsType) => void;
  isReady: boolean;
  dataIsReady: {
    infoIsReady: boolean;
    mapIsReady: boolean;
  };
  statusIsReady: (object: StatusIsReadyType) => void;
};

export default WeatherContextType;
