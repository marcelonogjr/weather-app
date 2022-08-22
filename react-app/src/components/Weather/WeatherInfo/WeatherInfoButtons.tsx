import styles from './WeatherInfoButtons.module.css';

interface WeatherInfoButtonsProps {
  onCurrentClick: () => void,
  onHourlyClick: () => void,
  onDailyClick: () => void,
  currentlyActive : 'current' | 'hourly' | 'daily';
}

const WeatherInfoButtons = (props: WeatherInfoButtonsProps) => {
  return <div className={styles['info-buttons']}>
    <button onClick={props.onCurrentClick} className={(props.currentlyActive === 'current') ? styles['active'] : ''}>Current</button>
    <button onClick={props.onHourlyClick} className={(props.currentlyActive === 'hourly') ? styles['active'] : ''}>Hourly</button>
    <button  onClick={props.onDailyClick} className={(props.currentlyActive === 'daily') ? styles['active'] : ''}>Daily</button>
  </div>
};

export default WeatherInfoButtons;