import { useContext } from 'react';

import WeatherContext from '../../../../store/weather-context';
import MapContext from '../../../../store/map-context';
import styles from './WeatherMap.module.css';
import MapLegendProperties from './WeatherMap/MapLegendProperties';

const WeatherMap = (props: { mapImage: undefined | string }) => {
  const { units } = useContext(WeatherContext);
  const { mapLayer } = useContext(MapContext);

  const selectedLayer = (currentLayer = mapLayer) => {
    if (currentLayer === 'clouds') {
      return 'Clouds';
    } else if (currentLayer === 'precipitation') {
      return 'Precipitation';
    } else if (currentLayer === 'pressure') {
      return 'Sea Level Pressure';
    } else if (currentLayer === 'wind') {
      return 'Wind Speed';
    } else {
      return 'Temperature';
    }
  };

  const MapLegend =
    mapLayer && units
      ? MapLegendProperties(units)[mapLayer].values.map((value) => {
          return <span key={`legend-key_${value}`}>{value}</span>;
        })
      : '';

  console.log(
    mapLayer && units && MapLegendProperties(units)[mapLayer].gradient
  );

  return (
    <>
      {mapLayer && units && (
        <div className={styles['map-bundle']}>
          <img
            title={`Weather Map - ${mapLayer}`}
            className={styles['map']}
            src={props.mapImage}
            alt={`Weather Map - ${mapLayer}`}
          />
          <div className={styles['map-description']}>
            <p className={styles['map-description__map-layer']}>
              Map Layer: <span>{selectedLayer()}</span>
            </p>
            <p className={styles['map-description__unit']}>
              Unit: <span>{MapLegendProperties(units)[mapLayer].unit}</span>
            </p>
          </div>
          <div className={styles['map-legend']}>
            <div
              className={styles['map-legend__gradient']}
              style={MapLegendProperties(units)[mapLayer].gradient}
            ></div>
            {MapLegend}
          </div>
        </div>
      )}
    </>
  );
};

export default WeatherMap;
