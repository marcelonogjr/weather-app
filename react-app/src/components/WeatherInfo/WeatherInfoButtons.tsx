import styles from './WeatherInfoButtons.module.css';

interface WeatherInfoButtonsProps {
  onCurrentClick: () => void,
  onHourlyClick: () => void,
  onDailyClick: () => void,
}

const WeatherInfoButtons = (props: WeatherInfoButtonsProps) => {
  return <div className={styles['info-buttons']}>
    <button onClick={props.onCurrentClick}>Current</button>
    <button onClick={props.onHourlyClick}>Hourly</button>
    <button  onClick={props.onDailyClick}>Daily</button>
  </div>
};

export default WeatherInfoButtons;