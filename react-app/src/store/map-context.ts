import React from "react";

import MapContextType, {ZoomType, MapLayerType} from '../models/MapContextType';

const MapContext = React.createContext<MapContextType>({
  zoom: null,
  changeZoomLevel: (newZoom: ZoomType) => {},
  mapLayer: null,
  changeMapLayer: (newMapLayer: MapLayerType) => {}
});

export default MapContext;