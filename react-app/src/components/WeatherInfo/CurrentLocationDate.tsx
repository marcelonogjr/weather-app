import WeatherAPIDataType from '../../models/WeatherAPIDataType';
import styles from './CurrentLocationDate.module.css';
import TimeConversor, {
  timeConversorObjectType,
  dateConversorObjectType,
} from '../../others/time-conversor';

interface CurrentLocationDatePropsType {
  data: WeatherAPIDataType;
}

const CurrentLocationDate = (props: CurrentLocationDatePropsType) => {
  const timeInfo = (timeConversorObject: timeConversorObjectType) => {
    
    return (
      <h4>
        {timeConversorObject.hour > 9 ? timeConversorObject.hour : '0'+timeConversorObject.hour}:
        {timeConversorObject.minute > 9 ? timeConversorObject.minute : '0'+timeConversorObject.minute}:
        {timeConversorObject.second > 9 ? timeConversorObject.second : '0'+timeConversorObject.second}
      </h4>
    );
  };
  const dateInfo = (dateConversorObject: dateConversorObjectType) => {
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
      <h3>{props.data.location.city}</h3>
      <h4>
        {props.data.location.state}, {props.data.location.country}
      </h4>
      <span>
        {timeInfo(TimeConversor(props.data.weather.current.dt).time)}
        {dateInfo(TimeConversor(props.data.weather.current.dt).date)}
      </span>
    </div>
  );
};

export default CurrentLocationDate;
