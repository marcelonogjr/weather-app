import React from 'react';
import styles from './WeatherMapLayers.module.css';

interface WeatherMapLayersProps{
  selectedLayer: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const WeatherMapLayers = (props: WeatherMapLayersProps) => {
  
  return (
    <div className={styles['weather-layer-bundle']}>
      <label htmlFor='weather-layer'>
        <p>Choose a weather layer:</p>
      </label>
      <select
        id='weather-layer'
        value={props.selectedLayer}
        onChange={props.onChange}
      >
        <option value='clouds'>Clouds</option>
        <option value='precipitation'>Precipitation</option>
        <option value='pressure'>Sea Level Pressure</option>
        <option value='temperature'>Temperature</option>
        <option value='wind'>Wind Speed</option>
      </select>
    </div>
  );
};

export default WeatherMapLayers;
