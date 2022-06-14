import { useContext } from 'react';
import WeatherContext from '../../store/weather-context';
import styles from './WeatherUnits.module.css';

interface WeatherUnitsProps {
  selectedUnits: 'metric' | 'imperial',
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const WeatherUnits = (props: WeatherUnitsProps) => {
  
  return (
    <ul className={styles['units']}>
      <p>Units:</p>
      <li>
        <label>
          <input
            type='radio'
            name='units'
            value='imperial'
            checked={props.selectedUnits === 'imperial'}
            onChange={props.onChange}
          />
          <span>Imperial</span>
        </label>
      </li>
      <li>
        <label>
          <input
            type='radio'
            name='units'
            value='metric'
            checked={props.selectedUnits === 'metric'}
            onChange={props.onChange}
          />
          <span>Metric</span>
        </label>
      </li>
    </ul>
  );
};

export default WeatherUnits;
