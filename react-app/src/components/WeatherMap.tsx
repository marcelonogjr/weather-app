import { useState, useEffect, useContext } from 'react';

import WeatherContext from '../store/weather-context';
import MapContext from '../store/map-context';
import styles from './WeatherMap.module.css';
import MapLegendProperties from './WeatherMap/MapLegendProperties';

const WeatherMap = () => {
  const [mapImage, setMapImage] = useState<undefined | string>();

  const { lat, lon, statusIsReady, isReady, units } =
    useContext(WeatherContext);
  const { zoom, mapLayer } = useContext(MapContext);

  // const serverUrl = 'http://localhost:5000';
  const serverUrl = 'https://weather-nogueira-app.herokuapp.com';

  const mapUrl = `${serverUrl}/api/weather-map?lat=${lat}&lon=${lon}&zoom=${zoom}&map__type=${mapLayer}`;

  useEffect(() => {
    const abortController = new AbortController();
    
    const fetchMap = async () => {
      try{
        const res = await fetch(mapUrl, {signal: abortController.signal});
        const imageBlob = await res.blob();
        const imageObjectURL = URL.createObjectURL(imageBlob);
        setMapImage(imageObjectURL);
        statusIsReady({
          mapIsReady: true,
        });
      } catch (error: unknown) {
        
      }
    };
    if (lat && lon && zoom && mapLayer && !isReady) {
      statusIsReady({
        mapIsReady: false,
      });
      fetchMap();
    }

    return () => {
      abortController.abort();
    }
  }, [mapUrl, lat, lon, zoom, mapLayer, isReady, statusIsReady]);

  const MapLegend =
    mapLayer && units
      ? MapLegendProperties(units)[mapLayer].values.map((value) => {
          return <span key={`legend-key_${value}`}>{value}</span>;
        })
      : '';

  return (
    <>
      {isReady && mapLayer && units && (
        <div className={styles['map-bundle']}>
          <img
            title={`Weather Map - ${mapLayer}`}
            className={styles['map-bundle__map']}
            src={mapImage}
            alt='Weather Map'
          />
          <div className={styles['map-bundle__legend--bar']}>
            <div className={styles['map-bundle__legend--background']}></div>
            <div
              className={styles['map-bundle__legend--gradient']}
              style={MapLegendProperties(units)[mapLayer].gradient}
            ></div>
            {MapLegend}
          </div>
          <div className={styles['map-bundle__legend--units']}>
            <div className={styles['map-bundle__legend--background']}></div>
            <div
              className={styles['map-bundle__legend--gradient']}
              style={MapLegendProperties(units)[mapLayer].gradient}
            ></div>
            <span>Unit: </span>
            <span>{MapLegendProperties(units)[mapLayer].unit}</span>
          </div>
        </div>
      )}
    </>
  );
};

export default WeatherMap;
