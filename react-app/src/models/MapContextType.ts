export interface ChildrenProps {
  children: React.ReactNode;
};

export type ZoomType = 'small' | 'medium' | 'large';

type MapContextType = {
  zoom: null | ZoomType;
  changeZoomLevel: (newZoom: ZoomType) => void;
  mapType: null | string;
  changeMapType: (newMapType: string) => void;
};

export default MapContextType;