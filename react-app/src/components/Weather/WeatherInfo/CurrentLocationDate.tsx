import WeatherAPIDataType from '../../../models/WeatherAPIDataType';
import styles from './CurrentLocationDate.module.css';
import TimeConversor, {
  TimeConversorObjectType,
  DateConversorObjectType,
} from '../../../others/time-conversor';

interface CurrentLocationDatePropsType {
  locationData: string;
  weatherData: WeatherAPIDataType;
}

const CurrentLocationDate = (props: CurrentLocationDatePropsType) => {
  const locationArray = props.locationData.split(',');
  const mainLocation = locationArray.shift();

  const timeInfo = (timeConversorObject: TimeConversorObjectType) => {
    return (
      <>
        {timeConversorObject.hour.hour > 9
          ? timeConversorObject.hour.hour
          : '0' + timeConversorObject.hour.hour}
        :
        {timeConversorObject.minute > 9
          ? timeConversorObject.minute
          : '0' + timeConversorObject.minute}{' '}
        {timeConversorObject.hour.period}
      </>
    );
  };
  const dateInfo = (dateConversorObject: DateConversorObjectType) => {
    return (
      <>
        {dateConversorObject.weekDay}, {dateConversorObject.month.spelled}{' '}
        {dateConversorObject.day}
        <sup>{dateConversorObject.ordinal}</sup> {dateConversorObject.year}
      </>
    );
  };

  return (
    <div className={styles['location_date-bundle']}>
      <p className={styles['location']}>
        <span className={styles['location__main']}>{mainLocation}</span>
        {locationArray.length > 0 && `, ${locationArray.join(', ')}`}
      </p>
      <p className={styles['date']}>
        <span className={styles['date__time']}>
          {timeInfo(TimeConversor(props.weatherData.current.dt).time)}
        </span>
        {' - '}
        {dateInfo(TimeConversor(props.weatherData.current.dt).date)}
      </p>
    </div>
  );
};

export default CurrentLocationDate;
