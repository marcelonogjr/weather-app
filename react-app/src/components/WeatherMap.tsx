import { useState, useEffect, useContext } from 'react';

import WeatherContext from '../store/weather-context';
import MapContext from '../store/map-context';
import styles from './WeatherMap.module.css';
import MapLegendProperties from './WeatherMap/MapLegendProperties';

const WeatherMap = () => {
  const [mapImage, setMapImage] = useState<undefined | string>();

  const { address, statusIsReady, isReady } = useContext(WeatherContext);
  const { zoom, mapLayer } = useContext(MapContext);

  // const serverUrl = 'http://localhost:5000';
  const serverUrl = 'https://weather-nogueira-app.herokuapp.com';

  const mapUrl = `${serverUrl}/api/weather-map?address=${address}&zoom=${zoom}&map__type=${mapLayer}`;

  useEffect(() => {
    const fetchMap = async () => {
      const res = await fetch(mapUrl);
      const imageBlob = await res.blob();
      const imageObjectURL = URL.createObjectURL(imageBlob);
      setMapImage(imageObjectURL);
      statusIsReady({
        mapIsReady: true,
      });
    };
    if (address && zoom && mapLayer) {
      fetchMap();
    }
  }, [mapUrl, address, zoom, mapLayer, statusIsReady]);

  const MapLegend = mapLayer ? MapLegendProperties[mapLayer].values.map((value) => {
    return (
      <span>
        {value}
      </span>
    )
    ;
  }) : '';

  return (
    <>
      {isReady && mapLayer && (
        <div className={styles['map-bundle']}>
          <img
            className={styles['map-bundle__map']}
            src={mapImage}
            alt='Weather Map'
          />
          <div className={styles['map-bundle__legend--bar']}>
            <div className={styles['map-bundle__legend--background']}></div>
            <div className={styles['map-bundle__legend--gradient']} style={MapLegendProperties[mapLayer].gradient}></div>
            {MapLegend}
          </div>
          <div className={styles['map-bundle__legend--units']}>
            <div className={styles['map-bundle__legend--background']}></div>
            <div className={styles['map-bundle__legend--gradient']} style={MapLegendProperties[mapLayer].gradient}></div>
            <span>Unit: </span>
            <span>{MapLegendProperties[mapLayer].unit}</span>
          </div>
        </div>
      )}
    </>
  );
};

export default WeatherMap;
