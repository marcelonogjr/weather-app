import styles from './WeatherInfoButtons.module.css';

interface WeatherInfoButtonsProps {
  onCurrentClick: () => void,
  onHourlyClick: () => void,
  onDailyClick: () => void,
}

const WeatherInfoButtons = (props: WeatherInfoButtonsProps) => {
  return <div className={styles['info-buttons']}>
    <button value='current' onClick={props.onCurrentClick}>Current</button>
    <button value='hourly' onClick={props.onHourlyClick}>Hourly</button>
    <button value='daily' onClick={props.onDailyClick}>Daily</button>
  </div>
};

export default WeatherInfoButtons;