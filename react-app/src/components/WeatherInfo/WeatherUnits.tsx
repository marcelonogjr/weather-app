import styles from './WeatherUnits.module.css';

interface WeatherUnitsProps {
  selectedUnits: 'metric' | 'imperial',
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const WeatherUnits = (props: WeatherUnitsProps) => {
  
  return (
    <div className={styles['units']}>
      <p>{props.selectedUnits.charAt(0).toUpperCase() + props.selectedUnits.slice(1)}</p>
        <label className={styles['units-switch']}>
          <input
            type='checkbox'
            name='units'
            value='imperial'
            // onChange={unitsChangeHandler}
            onChange={props.onChange}
          />
          <span className={styles['units-slider']}></span>
        </label>
    </div>
  );
};

export default WeatherUnits;
