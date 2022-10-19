import styles from './WeatherUnits.module.css';

interface WeatherUnitsProps {
  selectedUnits: 'metric' | 'imperial';
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const WeatherUnits = (props: WeatherUnitsProps) => {
  return (
    <div className={styles['units']}>
      <label className={styles['units-switch']}>
        <input
          type='checkbox'
          name='units'
          value={props.selectedUnits}
          defaultChecked={props.selectedUnits === 'imperial' ? false : true}
          onChange={props.onChange}
        />
        <span className={styles['units-slider']}></span>
      </label>
      <p className={styles['units-description']}>
        Metric: <span>{props.selectedUnits === 'metric' ? 'On' : 'Off'}</span>
      </p>
    </div>
  );
};

export default WeatherUnits;
