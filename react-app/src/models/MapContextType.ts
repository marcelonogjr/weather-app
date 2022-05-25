export interface ChildrenProps {
  children: React.ReactNode;
}

export type ZoomType = 'small' | 'medium' | 'large';

export type MapLayerType =
  | 'clouds'
  | 'precipitation'
  | 'pressure'
  | 'wind'
  | 'temperature';

type MapContextType = {
  zoom: null | ZoomType;
  changeZoomLevel: (newZoom: ZoomType) => void;
  mapLayer: null | MapLayerType;
  changeMapLayer: (newMapLayer: MapLayerType) => void;
};

export default MapContextType;
