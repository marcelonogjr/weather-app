import { useContext } from 'react';
import WeatherContext from '../../store/weather-context';
import styles from './WeatherUnits.module.css';

const WeatherUnits = () => {
  const {units, changeUnits} = useContext(WeatherContext);

  const changeUnitsHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedUnits = event.target.value;

    if (selectedUnits === 'imperial' || selectedUnits === 'metric'){
      changeUnits(selectedUnits);
    }
  }
  
  return (
    <ul className={styles['units']}>
      <p>Units:</p>
      <li>
        <label>
          <input
            type='radio'
            name='units'
            value='imperial'
            checked={units === 'imperial'}
            onChange={changeUnitsHandler}
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
            checked={units === 'metric'}
            onChange={changeUnitsHandler}
          />
          <span>Metric</span>
        </label>
      </li>
    </ul>
  );
};

export default WeatherUnits;
