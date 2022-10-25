import React from 'react';

import WeatherFormLayerIcons from '../../UI/WeatherForm-Icons/WeatherFormLayerIcons';
import styles from './WeatherMapLayers.module.css';

interface WeatherMapLayersProps {
  selectedLayer:
    | 'clouds'
    | 'precipitation'
    | 'pressure'
    | 'wind'
    | 'temperature';
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const WeatherMapLayers = (props: WeatherMapLayersProps) => {
  const selectedLayer = (currentLayer = props.selectedLayer) => {
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
  return (
    <div className={styles['layer-bundle']}>
      <p>Weather Layer: {selectedLayer()}</p>
      <ul className={styles['weather-layer_icons']}>
        <li>
          <label>
            <input
              type='radio'
              name='weather-layer'
              value='temperature'
              checked={props.selectedLayer === 'temperature'}
              onChange={props.onChange}
            />
            <WeatherFormLayerIcons
              layerType='Temperature'
              currentlySelected={props.selectedLayer}
            />
          </label>
        </li>
        <li>
          <label>
            <input
              type='radio'
              name='weather-layer'
              value='precipitation'
              checked={props.selectedLayer === 'precipitation'}
              onChange={props.onChange}
            />
            <WeatherFormLayerIcons
              layerType='Precipitation'
              currentlySelected={props.selectedLayer}
            />
          </label>
        </li>
        <li>
          <label>
            <input
              type='radio'
              name='weather-layer'
              value='wind'
              checked={props.selectedLayer === 'wind'}
              onChange={props.onChange}
            />
            <WeatherFormLayerIcons
              layerType='Wind Speed'
              currentlySelected={props.selectedLayer}
            />
          </label>
        </li>
        <li>
          <label>
            <input
              type='radio'
              name='weather-layer'
              value='pressure'
              checked={props.selectedLayer === 'pressure'}
              onChange={props.onChange}
            />
            <WeatherFormLayerIcons
              layerType='Sea Level Pressure'
              currentlySelected={props.selectedLayer}
            />
          </label>
        </li>
        <li>
          <label>
            <input
              type='radio'
              name='weather-layer'
              value='clouds'
              checked={props.selectedLayer === 'clouds'}
              onChange={props.onChange}
            />
            <WeatherFormLayerIcons
              layerType='Clouds'
              currentlySelected={props.selectedLayer}
            />
          </label>
        </li>
      </ul>
    </div>
  );
};

export default WeatherMapLayers;
