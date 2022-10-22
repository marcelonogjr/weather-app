import { useContext } from 'react';

import WeatherContext from '../../../store/weather-context';
import MapContext from '../../../store/map-context';
import styles from './WeatherMap.module.css';
import MapLegendProperties from '../WeatherMap/MapLegendProperties';

const WeatherMap = (props: {mapImage: undefined | string}) => {
  const { units } = useContext(WeatherContext);
  const { mapLayer } = useContext(MapContext);

  const MapLegend =
    mapLayer && units
      ? MapLegendProperties(units)[mapLayer].values.map((value) => {
          return <span key={`legend-key_${value}`}>{value}</span>;
        })
      : '';

  return (
    <>
      {mapLayer && units && (
        <div className={styles['map-bundle']}>
          <img
            title={`Weather Map - ${mapLayer}`}
            className={styles['map-bundle__map']}
            src={props.mapImage}
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
