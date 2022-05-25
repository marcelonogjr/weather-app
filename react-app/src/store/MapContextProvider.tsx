import React, { useCallback, useState } from 'react';

import MapContext from './map-context';
import {ChildrenProps, ZoomType, MapLayerType} from '../models/MapContextType';

const MapContextProvider: React.FC<ChildrenProps> = (props) => {
  const [zoomLevel, setZoomLevel] = useState<ZoomType>('small');
  const [mapLayer, setMapLayer] = useState<MapLayerType>('temperature');
  
  const changeZoomHandler = useCallback((newZoom: ZoomType) => {
    setZoomLevel(newZoom);
  }, [])

  const changeMapTypeHandler = useCallback((newMapLayer: MapLayerType) => {
    setMapLayer(newMapLayer);
  }, [])

  const contextValue = {
    zoom: zoomLevel,
    changeZoomLevel: changeZoomHandler,
    mapLayer: mapLayer,
    changeMapLayer: changeMapTypeHandler
  };

  return (
    <MapContext.Provider value={contextValue}>
      {props.children}
    </MapContext.Provider>
  );
};

export default MapContextProvider;