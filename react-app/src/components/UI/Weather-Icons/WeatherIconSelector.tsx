import styles from './Icons/WeatherIcons.module.css';

import WeatherIcon01d from './Icons/WeatherIcon01d';
import WeatherIcon01n from './Icons/WeatherIcon01n';
import WeatherIcon02 from './Icons/WeatherIcon02';
import WeatherIcon03 from './Icons/WeatherIcon03';
import WeatherIcon04 from './Icons/WeatherIcon04';
import WeatherIcon09 from './Icons/WeatherIcon09';
import WeatherIcon10 from './Icons/WeatherIcon10';
import WeatherIcon11 from './Icons/WeatherIcon11';
import WeatherIcon50 from './Icons/WeatherIcon50';
import WeatherIcon13 from './Icons/WeatherIcon13';

const WeatherIconSelector = (props: {
  iconId: string;
  iconDescription: string;
  parentComponent: 'current' | 'hourly' | 'daily' | 'help';
}) => {
  const iconNumber = props.iconId.slice(0, 2);
  const iconPeriod = props.iconId.slice(2);

  return (
    <div className={styles['weather-selector']}>
      {props.iconId === '01d' && (
        <WeatherIcon01d
          parentComponent={props.parentComponent}
          description={props.iconDescription}
        />
      )}
      {props.iconId === '01n' && (
        <WeatherIcon01n
          parentComponent={props.parentComponent}
          description={props.iconDescription}
        />
      )}
      {iconNumber === '02' && (
        <WeatherIcon02
          parentComponent={props.parentComponent}
          description={props.iconDescription}
          period={iconPeriod}
        />
      )}
      {iconNumber === '03' && (
        <WeatherIcon03 parentComponent={props.parentComponent} description={props.iconDescription} />
      )}
      {iconNumber === '04' && (
        <WeatherIcon04 parentComponent={props.parentComponent} description={props.iconDescription} />
      )}
      {iconNumber === '09' && (
        <WeatherIcon09 parentComponent={props.parentComponent} description={props.iconDescription} />
      )}
      {iconNumber === '10' && (
        <WeatherIcon10
        parentComponent={props.parentComponent}
          description={props.iconDescription}
          period={iconPeriod}
        />
      )}
      {iconNumber === '11' && (
        <WeatherIcon11 parentComponent={props.parentComponent} description={props.iconDescription} />
      )}
      {iconNumber === '13' && (
        <WeatherIcon13 parentComponent={props.parentComponent} description={props.iconDescription} />
      )}
      {iconNumber === '50' && (
        <WeatherIcon50 parentComponent={props.parentComponent} description={props.iconDescription} />
      )}
    </div>
  );
};

export default WeatherIconSelector;
