import WeatherAPIDataType from '../../models/WeatherAPIDataType';
import styles from './CurrentLocationDate.module.css';
import TimeConversor, {
  TimeConversorObjectType,
  DateConversorObjectType,
} from '../../others/time-conversor';

interface CurrentLocationDatePropsType {
  locationData: string;
  weatherData: WeatherAPIDataType;
}

const CurrentLocationDate = (props: CurrentLocationDatePropsType) => {
  const [city, state, country] = props.locationData.split(',');
  
  const timeInfo = (timeConversorObject: TimeConversorObjectType) => {
    
    return (
      <h4>
        {timeConversorObject.hour.hour > 9 ? timeConversorObject.hour.hour : '0' + timeConversorObject.hour.hour}:
        {timeConversorObject.minute > 9 ? timeConversorObject.minute : '0' + timeConversorObject.minute}:
        {timeConversorObject.second > 9 ? timeConversorObject.second : '0' + timeConversorObject.second} {timeConversorObject.hour.period}
      </h4>
    );
  };
  const dateInfo = (dateConversorObject: DateConversorObjectType) => {
    return (
      <h5>
        {dateConversorObject.weekDay}, {dateConversorObject.month.spelled}{' '}
        {dateConversorObject.day}
        <sup>{dateConversorObject.ordinal}</sup> {dateConversorObject.year}
      </h5>
    );
  };
  
  return (
    <div className={styles['location_date-bundle']}>
      <h3>{city}</h3>
      <h4>
        {state}, {country}
      </h4>
      <span>
        {timeInfo(TimeConversor(props.weatherData.current.dt).time)}
        {dateInfo(TimeConversor(props.weatherData.current.dt).date)}
      </span>
    </div>
  );
};

export default CurrentLocationDate;
