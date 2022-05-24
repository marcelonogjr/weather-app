import React, { useCallback, useState } from 'react';

import MapContext from './map-context';
import {ChildrenProps, ZoomType} from '../models/MapContextType';

const MapContextProvider: React.FC<ChildrenProps> = (props) => {
  const [zoomLevel, setZoomLevel] = useState<ZoomType>('small');
  // const [mapType, setMapType] = useState('anything for now');
  const mapType = useState('anything for now')[0];
  
  const changeZoomHandler = useCallback((newZoom: ZoomType) => {
    setZoomLevel(newZoom);
  }, [])

  const changeMapTypeHandler = useCallback(() => {

  }, [])

  const contextValue = {
    zoom: zoomLevel,
    changeZoomLevel: changeZoomHandler,
    mapType: mapType,
    changeMapType: changeMapTypeHandler
  };

  return (
    <MapContext.Provider value={contextValue}>
      {props.children}
    </MapContext.Provider>
  );
};

export default MapContextProvider;