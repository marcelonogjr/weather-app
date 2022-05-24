import React from "react";

import MapContextType, {ZoomType} from '../models/MapContextType';

const MapContext = React.createContext<MapContextType>({
  zoom: null,
  changeZoomLevel: (newZoom: ZoomType) => {},
  mapType: null,
  changeMapType: (newMapType: string) => {}
});

export default MapContext;